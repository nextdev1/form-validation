"use client";
import { cn } from "@/lib/utils";
import { useForm } from "react-hook-form";
import { RegisterSchema, TRegisterSchema } from "@/lib/zod";
import { zodResolver } from "@hookform/resolvers/zod";
export default function SignUp() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<TRegisterSchema>({
    resolver: zodResolver(RegisterSchema),
  });
  return (
    <div className="min-h-screen flex justify-center items-center">
      <form
        onSubmit={handleSubmit((data) => console.log(data))}
        className="flex flex-col justify-center items-center h-[440px] w-[400px] rounded-md bg-white border-[1px] border-gray-100 shadow-2xl shadow-blue-100 space-y-4 px-4 duration-150"
      >
        <div className="flex flex-col mr-auto">
          <h2 className="text-lg font-medium">Sign Up</h2>
          <p className="text-sm text-gray-600">Register to get started</p>
        </div>
        <div className="flex flex-col space-y-1 text-[15px] w-full">
          <h2>E-Mail</h2>
          <input
            {...register("email")}
            type="text"
            placeholder="Email"
            className={cn(
              "bg-white px-2 p-1 w-full border-[1px] rounded-md outline-none",
              errors.email && "border-red-400"
            )}
          />
          {errors.email && (
            <p className="text-red-400 text-sm">{errors.email.message}</p>
          )}
        </div>
        <div className="flex flex-col space-y-1 text-[15px] w-full">
          <h2>Username</h2>
          <input
            {...register("username")}
            type="text"
            placeholder="Username"
            className={cn(
              "bg-white px-2 p-1 w-full border-[1px] rounded-md outline-none",
              errors.username && "border-red-400"
            )}
          />
          {errors.username && (
            <p className="text-red-400 text-sm">{errors.username.message}</p>
          )}
        </div>
        <div className="flex flex-col space-y-1 text-[15px] w-full">
          <h2>Password</h2>
          <input
            {...register("password")}
            type="text"
            placeholder="Password"
            className={cn(
              "bg-white px-2 p-1 w-full border-[1px] rounded-md outline-none",
              errors.password && "border-red-400"
            )}
          />
          {errors.password && (
            <p className="text-red-400 text-sm">{errors.password.message}</p>
          )}
        </div>
        <button className="bg-gray-800 hover:opacity-80 duration-150 text-white w-full p-2 rounded-md">
          Submit
        </button>
      </form>
    </div>
  );
}
