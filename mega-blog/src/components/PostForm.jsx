import { useForm } from "react-hook-form";
import StorageService from "../appwrite/StorageService";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Button from "./Button";
import Input from "./Input";
import RTE from "./RTE";
import SelectBtn from "./SelectBtn";
import { useCallback, useEffect } from "react";

function PostForm({ post }) {
  const navigate = useNavigate();
  const userData = useSelector((state) => state.auth.userData);
  const { register, handleSubmit, reset, watch, control, setValue, getValues } =
    useForm({
      defaultValues: {
        title: post?.slug || "",
        content: post?.content || "",
        status: post?.status || "active",
        slug: post?.slug || "",
      },
    });

  const submit = async (data) => {
    if (post) {
      const file = data.image[0]
        ? StorageService.uploadfile(data.image[0])
        : null;
      if (file) {
        StorageService.deleteFile(post.featuredImage);
      }
      const dbPost = await StorageService.updatePost(post.$id, {
        ...data,
        featuredImage: file ? file.$id : null,
      });
      if (dbPost) {
        navigate(`/post/${dbPost.$id}`);
      }
    } else {
      const file = await StorageService.uploadfile(data.image[0]);
      if (file) {
        const fileId = file.$id;
        data.featuredImage = fileId;
        const dbPost = await StorageService.createPost({
          ...data,
          userId: userData.$id,
        });
        if (dbPost) {
          navigate(`/post/${dbPost.$id}`);
        }
      }
    }
  };

  const slugTransform = useCallback((value) => {
    if (value && typeof value === "string")
      return value
        .trim()
        .toLowerCase()
        .replace(/[^a-zA-Z\d\s]+/g, "-")
        .replace(/\s/g, "-");

    return "";
  }, []);

  useEffect(() => {
    const subscription = watch((value, { name }) => {
      if (name === "title") {
        setValue("slug", slugTransform(value.title, { shouldValidate: true }));
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [watch, slugTransform, setValue]);

  return (
    <div className="flex-1 bg-gradient-to-br from-slate-50 to-slate-100 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Form Container */}
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200/60 overflow-hidden">
          <form onSubmit={handleSubmit(submit)} className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left Column - Main Content */}
              <div className="lg:col-span-2 space-y-6">
                <div className="space-y-6">
                  <Input
                    label="Post Title"
                    placeholder="Enter an engaging title for your post"
                    {...register("title", { required: true })}
                  />

                  <Input
                    label="URL Slug"
                    placeholder="url-friendly-slug"
                    {...register("slug", { required: true })}
                    onInput={(e) => {
                      setValue("slug", slugTransform(e.currentTarget.value), {
                        shouldValidate: true,
                      });
                    }}
                  />
                </div>

                {/* Rich Text Editor */}
                <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                  <RTE
                    label="Post Content"
                    name="content"
                    control={control}
                    defaultValue={getValues("content")}
                  />
                </div>
              </div>

              {/* Right Column - Sidebar */}
              <div className="space-y-6">
                {/* Publish Settings Card */}
                <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                  <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center">
                    <svg
                      className="w-5 h-5 mr-2 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4"
                      />
                    </svg>
                    Publish Settings
                  </h3>

                  <div className="space-y-4">
                    <Select
                      options={["active", "inactive"]}
                      label="Publication Status"
                      {...register("status", { required: true })}
                    />

                    <Button
                      type="submit"
                      className={`w-full cursor-pointer ${
                        post
                          ? "bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800"
                          : "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                      } text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 transform hover:scale-[1.02] hover:shadow-lg focus:ring-2 ${
                        post ? "focus:ring-green-500" : "focus:ring-blue-500"
                      } focus:ring-offset-2`}
                    >
                      <span className="flex items-center justify-center">
                        {post ? (
                          <>
                            <svg
                              className="w-5 h-5 mr-2"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                              />
                            </svg>
                            Update Post
                          </>
                        ) : (
                          <>
                            <svg
                              className="w-5 h-5 mr-2"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 4v16m8-8H4"
                              />
                            </svg>
                            Publish Post
                          </>
                        )}
                      </span>
                    </Button>
                  </div>
                </div>

                {/* Featured Image Card */}
                <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                  <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center">
                    <svg
                      className="w-5 h-5 mr-2 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    Featured Image
                  </h3>

                  <div className="space-y-4">
                    <Input
                      label="Upload Image"
                      type="file"
                      accept="image/png, image/jpg, image/jpeg, image/gif"
                      {...register("image", { required: !post })}
                    />
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default PostForm;
