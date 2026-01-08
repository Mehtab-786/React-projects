import { useEffect, useMemo, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import appwriteService from "../appwrite/StorageService";
import Button from "../components/Button";
import Container from "../components/container/Container";
import parse from "html-react-parser";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

export default function Post() {
  const [post, setPost] = useState(null);

  const { slug } = useParams();
  const navigate = useNavigate();

  const userData = useSelector((state) => state?.auth?.userData);

  const formattedDate = new Date(post?.$createdAt).toLocaleString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  const isAuther = useMemo(() => {
    return post && userData ? post?.userId === userData?.$id : false;
  }, [post, userData]);

  useEffect(() => {
    if (slug) {
      appwriteService.getPost(slug).then((post) => {
        if (post) {
          setPost(post);
        } else navigate("/");
      });
    } else navigate("/");
  }, [slug, navigate]);

  const deletePost = () => {
    appwriteService.deletePost(post.$id).then((status) => {
      if (status) {
        appwriteService.deleteFile(post.featuredImage);
        navigate("/");
        toast.success("post deleted successfully");
      }
    });
  };

  const [fileUrl, setFileUrl] = useState(null);

  useEffect(() => {
    if (post?.featuredImage) {
      appwriteService.getFilePreview(post.featuredImage).then((url) => {
        setFileUrl(url);
      });
    }
  }, [post?.featuredImage]);

  return post ? (
    <div className="py-8">
      <Container>
        <div className="w-full flex justify-center mb-4 relative border rounded-xl p-2">
          <img
            src={fileUrl || null}
            alt={post.title}
            className="w-full aspect-video object-contain"
            loading="lazy"
          />

          {isAuther && (
            <div className="absolute right-6 top-6">
              <Button className="mr-3 bg-blue-600 px-4 py-2 rounded-lg  text-white font-medium cursor-pointer">
                <Link to={`/edit-post/${post.$id}`}>Edit</Link>
              </Button>
              <Button
                bgColor="bg-red-500"
                onClick={deletePost}
                classname="cursor-pointer"
              >
                Delete
              </Button>
            </div>
          )}
        </div>
        <div className="px-8 py-8">
          <div className="w-full mb-8 pb-6 border-b border-slate-200">
            <h1 className="text-4xl font-bold text-slate-900 leading-tight">
              {post.title}
            </h1>

            <div className="mt-3 flex items-center space-x-2 text-sm text-gray-600 ">
              <div className="flex items-center space-x-2 bg-gray-100 px-3 py-1 rounded-full shadow-sm">
                <span className="font-medium">{userData?.name}</span>
                <span className="text-gray-400">•</span>
                <span>{formattedDate}</span>
              </div>
            </div>
          </div>

          <div className="prose prose-lg prose-slate max-w-none">
            <div
              className="browser-css text-slate-700 leading-relaxed"
              style={{ fontSize: "18px", lineHeight: "1.7" }}
            >
              {parse(post.content)}
            </div>
          </div>
        </div>
      </Container>
    </div>
  ) : null;
}
