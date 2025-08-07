'use client';

import { useForm } from "@refinedev/react-hook-form";
import { Create } from "@refinedev/mui";
import { TextField } from "@mui/material";

export default function CreatePost() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    refineCore: { onFinish },
    saveButtonProps,
  } = useForm({
    refineCoreProps: {
      resource: "posts", // ✅ ensure correct resource
      action: "create",  // ✅ tells Refine this is a create form
    },
  });

  const onSubmit = async (data: any) => {
    await onFinish(data); // ✅ Refine handles saving, redirect, and refetching
  };

  return (
    <Create saveButtonProps={{ ...saveButtonProps, onClick: handleSubmit(onSubmit) }}>
      <TextField
        {...register("title", { required: "Title is required" })}
        label="Title"
        variant="outlined"
        fullWidth
        margin="normal"
        error={!!errors.title}
        helperText={errors.title?.message}
      />
    </Create>
  );
}
