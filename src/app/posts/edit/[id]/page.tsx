'use client';

import { useForm } from "@refinedev/react-hook-form";
import { Edit } from "@refinedev/mui";
import { TextField } from "@mui/material";
import { useRouter } from "next/navigation"; // ✅ used for redirect + refresh

export default function EditPost() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    refineCore: { onFinish },
    saveButtonProps,
  } = useForm({
    refineCoreProps: {
      resource: "posts",
      action: "edit",
    },
  });

  const onSubmit = async (data: any) => {
    await onFinish(data);         // ✅ update post
    router.push("/posts");        // ✅ redirect to list
    router.refresh();             // ✅ force refetch the data
  };

  return (
    <Edit saveButtonProps={{ ...saveButtonProps, onClick: handleSubmit(onSubmit) }}>
      <TextField
        {...register("title", { required: "Title is required" })}
        label="Title"
        fullWidth
        margin="normal"
        error={!!errors.title}
        helperText={errors.title?.message}
      />
    </Edit>
  );
}
