// 'use client';

// import { useRouter } from "next/navigation";

// export default function Dashboard() {
//   const router = useRouter();

//   return (
//     <div className="p-6">
//       <h1 className="text-3xl font-bold mb-2 text-blue-700">DeepMindLabs</h1>
//       <p className="mb-6 text-gray-600">
//         Welcome to your Refine Admin Panel Dashboard
//       </p>

//       <button
//         onClick={() => router.push("/posts")}
//         className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
//       >
//         Manage Posts
//       </button>
//     </div>
//   );
// }



//updated code
// 'use client';

// import { useRouter } from "next/navigation";
// import { useList } from "@refinedev/core";

// export default function Dashboard() {
//   const router = useRouter();

//   const { data, isLoading, error, refetch } = useList({
//     resource: "posts",
//     pagination: { mode: "off" },
//   });

//   if (isLoading) return <p className="p-6 text-center">Loading dashboard...</p>;
//   if (error) return <p className="p-6 text-center text-red-600">Error loading data</p>;

//   const posts = data?.data || [];

//   const totalPosts = posts.length;


//   return (
//     <div className="p-6 max-w-5xl mx-auto">
//       <h1 className="text-3xl font-bold mb-6 text-blue-700">DeepMindLabs</h1>
//       <p className="mb-10 text-gray-600">Welcome to your Refine Admin Panel Dashboard</p>

//       <div className="flex items-center gap-4 mb-8">
//         <button
//           onClick={() => router.push("/posts")}
//           className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
//         >
//           Manage Posts
//         </button>

        
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
//         <DashboardCard title="Total Posts" value={totalPosts} color="bg-blue-100 text-blue-800" />
        
//       </div>
//     </div>
//   );
// }

// function DashboardCard({ title, value, color }: { title: string; value: number; color: string }) {
//   return (
//     <div className={`rounded-xl p-6 shadow-sm flex flex-col justify-center items-center ${color}`}>
//       <p className="text-sm font-semibold">{title}</p>
//       <h2 className="text-4xl font-bold mt-2">{value}</h2>
//     </div>
//   );
// }


//last updated code

'use client';

import { useRouter } from "next/navigation";
import { useList } from "@refinedev/core";

export default function Dashboard() {
  const router = useRouter();

  // Fetch all posts and users without pagination for stats
  const { data: postsData, isLoading: postsLoading } = useList({
    resource: "posts",
    pagination: { mode: "off" },
  });

  const { data: usersData, isLoading: usersLoading } = useList({
    resource: "users",
    pagination: { mode: "off" },
  });

  if (postsLoading || usersLoading) {
    return <p className="p-6 text-center">Loading dashboard...</p>;
  }

  const posts = postsData?.data || [];
  const users = usersData?.data || [];

  const totalPosts = posts.length;

  const totalUsers = users.length;

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-blue-700">DeepMindLabs</h1>
      <p className="mb-10 text-gray-600">
        Welcome to your Refine Admin Panel Dashboard
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 mb-8">
        <DashboardCard
          title="Total Posts"
          value={totalPosts}
          color="bg-blue-100 text-blue-800"
        />
        
        <DashboardCard
          title="Total Users"
          value={totalUsers}
          color="bg-green-100 text-green-800"
        />
      </div>

      <div className="flex items-center gap-4">
        <button
          onClick={() => router.push("/posts")}
          className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
        >
          Manage Posts
        </button>

        <button
          onClick={() => router.push("/users")}
          className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 transition"
        >
          Manage Users
        </button>
      </div>
    </div>
  );
}

function DashboardCard({
  title,
  value,
  color,
}: {
  title: string;
  value: number;
  color: string;
}) {
  return (
    <div
      className={`rounded-xl p-6 shadow-sm flex flex-col justify-center items-center ${color}`}
    >
      <p className="text-sm font-semibold">{title}</p>
      <h2 className="text-4xl font-bold mt-2">{value}</h2>
    </div>
  );
}
