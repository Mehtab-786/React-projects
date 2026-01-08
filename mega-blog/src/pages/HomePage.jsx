import { lazy, Suspense, useEffect, useState } from "react";
import appwriteServices from "../appwrite/StorageService";
const PostCard = lazy(() => import("../components/PostCard"));

function Home() {
  const [Posts, setPosts] = useState([])

  useEffect(() => {
    async function getPosts() {
        await appwriteServices.getPosts().then((posts) => {
          if (posts) {
            setPosts(posts.rows);
          }
        });
      }
    getPosts();
  }, []);

  if (Posts.length === 0) {
    return (
      <div className="flex-1 flex items-center justify-center min-h-[60vh] bg-gradient-to-br from-slate-50 to-slate-100">
        <Container>
          {/* Header texts */}
          <div className="text-center space-y-6">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl shadow-lg mb-4">
              <svg
                className="w-10 h-10 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
            </div>

            <div className="space-y-3">
              <h1 className="text-3xl font-bold text-slate-900">
                Welcome to Our Blog
              </h1>
              <p className="text-slate-600 max-w-md mx-auto leading-relaxed">
                Discover amazing stories and insights. Sign in to access all
                posts and join our community.
              </p>
            </div>
          </div>
          {/* Loading animation */}
          <div className="flex items-center justify-center min-h-[20vh]">
            <div className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl animate-pulse">
                <svg
                  className="w-6 h-6 text-white animate-spin"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
              </div>
              <p className="text-slate-600 font-medium">Loading posts...</p>
            </div>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div className="flex-1 bg-gradient-to-br from-slate-50 to-slate-100 py-12">
      <Container>
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">
            Latest Posts
          </h1>
          <p className="text-slate-600">
            Discover our latest stories and insights
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <Suspense
            fallback={
              <div className="text-center self-center justify-self-center text-2xl font-bold text-blue-500">
                Loading...
              </div>
            }
          >
            {Posts?.map((post) => (
              <div key={post?.$id} className="group">
                <PostCard {...post} />
              </div>
            ))}
          </Suspense>
        </div>
      </Container>
    </div>
  );
}

export default Home;
