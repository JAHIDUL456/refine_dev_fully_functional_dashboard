'use client';

import { Refine } from "@refinedev/core"; // ✅ Correct
import routerProvider from "@refinedev/nextjs-router/app";
import dataProvider from "@refinedev/simple-rest";

import { RefineSnackbarProvider } from "@refinedev/mui"; // ✅ Wraps MUI UI components
import { CssBaseline, GlobalStyles } from "@mui/material"; // ✅ MUI base styles

const API_URL = "https://api.fake-rest.refine.dev";

export const RefineProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <CssBaseline />
      <GlobalStyles styles={{ body: { backgroundColor: "#f9fafb" } }} />

      <RefineSnackbarProvider>
        <Refine
  routerProvider={routerProvider}
  dataProvider={dataProvider(API_URL)}
  resources={[
    {
      name: "posts",
      list: "/posts",
      create: "/posts/create",
      edit: (params) => `/posts/edit/${params.id}`, // ✅ must be included
    },
  ]}
  options={{
    syncWithLocation: true,      // ✅ ensures auto-refetch works
    warnWhenUnsavedChanges: true,
  }}
>
  {children}
</Refine>

      </RefineSnackbarProvider>
    </>
  );
};
