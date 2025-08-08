// 'use client';

// import { useTable } from "@refinedev/core";
// import {
//   List,
//   EditButton,
//   DeleteButton,
// } from "@refinedev/mui";
// import { Pagination } from "@mui/material"; // ✅ use MUI's Pagination

// export default function PostList() {
//   const {
//     tableQuery: { data, isLoading },
//     current,
//     setCurrent,
//     pageCount,
//   } = useTable({
//     resource: "posts",
//     pagination: {
//       pageSize: 5, // ✅ optional: set items per page
//     },
//   });

//   if (isLoading) return <p>Loading...</p>;

//   return (
//     <List>
//       <h1 className="text-2xl font-bold mb-4">Posts</h1>

//       <table className="w-full border border-gray-300 mb-4">
//         <thead className="bg-gray-100">
//           <tr>
//             <th className="p-2 border">ID</th>
//             <th className="p-2 border">Title</th>
//             <th className="p-2 border">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {data?.data?.map((post: any) => (
//             <tr key={post.id}>
//               <td className="p-2 border">{post.id}</td>
//               <td className="p-2 border">{post.title}</td>
//               <td className="p-2 border">
//                 <EditButton resource="posts" recordItemId={post.id} />
//                 <DeleteButton resource="posts" recordItemId={post.id} />
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       {/* ✅ Pagination Controls */}
//       <div className="flex justify-center">
//         <Pagination
//           count={pageCount}
//           page={current}
//           onChange={(_, page) => setCurrent(page)}
//           color="primary"
//         />
//       </div>
//     </List>
//   );
// }



//updated code


'use client';

import { useTable } from "@refinedev/core";
import {
  List,
  EditButton,
  DeleteButton,
  CreateButton,
} from "@refinedev/mui";
import { Pagination, Button } from "@mui/material";
import { useRouter } from "next/navigation"; // ✅ for navigation

export default function PostList() {
  const {
    tableQuery: { data, isLoading },
    current,
    setCurrent,
    pageCount,
  } = useTable({
    resource: "posts",
    pagination: {
      pageSize: 10,
    },
  });

  const router = useRouter(); // ✅ next/navigation router

  if (isLoading) return <p>Loading...</p>;

  return (
    <List>
      {/* ✅ Top Header with Home and Create buttons */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Posts</h1>
        <div className="flex gap-2">
          <Button variant="outlined" onClick={() => router.push("/")}>
            Home
          </Button>
         
        </div>
      </div>

      {/* ✅ Post Table */}
      <table className="w-full border border-gray-300 mb-4">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2 border">ID</th>
            <th className="p-2 border">Title</th>
            <th className="p-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data?.data?.map((post: any) => (
            <tr key={post.id}>
              <td className="p-2 border">{post.id}</td>
              <td className="p-2 border">{post.title}</td>
              <td className="p-2 border flex gap-2">
                <EditButton resource="posts" recordItemId={post.id} />
                <DeleteButton resource="posts" recordItemId={post.id} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* ✅ Pagination Controls */}
      <div className="flex justify-center">
        <Pagination
          count={pageCount}
          page={current}
          onChange={(_, page) => setCurrent(page)}
          color="primary"
        />
      </div>
    </List>
  );
}

