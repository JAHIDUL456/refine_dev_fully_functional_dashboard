'use client';

import { useTable } from "@refinedev/core";
import {
  List,
  EditButton,
  DeleteButton,
} from "@refinedev/mui";
import { Pagination, Button } from "@mui/material";
import { useRouter } from "next/navigation";

export default function UserList() {
  const {
    tableQuery: { data, isLoading },
    current,
    setCurrent,
    pageCount,
  } = useTable({
    resource: "users",
    pagination: {
      pageSize: 10,
    },
  });

  const router = useRouter();

  if (isLoading) return <p>Loading...</p>;

  return (
    <List>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Users</h1>
        <Button variant="outlined" onClick={() => router.push("/")}>
          Home
        </Button>
      </div>

      <table className="w-full border border-gray-300 mb-4">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2 border">ID</th>
            <th className="p-2 border">Name</th>
            <th className="p-2 border">Email</th>
            <th className="p-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data?.data?.map((user: any) => (
            <tr key={user.id}>
              <td className="p-2 border">{user.id}</td>
              <td className="p-2 border">{user.name}</td>
              <td className="p-2 border">{user.email}</td>
              <td className="p-2 border flex gap-2">
                <EditButton resource="users" recordItemId={user.id} />
                <DeleteButton resource="users" recordItemId={user.id} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

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
