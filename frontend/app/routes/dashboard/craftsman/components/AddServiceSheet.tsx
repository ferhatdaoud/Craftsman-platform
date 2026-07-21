import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useForm, type SubmitHandler } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ServiceSchema, type ServiceInputs } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { Plus } from "lucide-react";

type AddServiceSheetProps = {
  userId: string;
  onSuccess?: () => void;
};

const AddServiceSheet = ({ userId, onSuccess }: AddServiceSheetProps) => {
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm<ServiceInputs>({
    resolver: zodResolver(ServiceSchema),
  });

  const { mutate, isPending } = useMutation({
    mutationFn: async (formData: ServiceInputs) => {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        "http://localhost:3000/api/createService",
        { ...formData, userId },
        {
          headers: { Authorization: `Bearer ${token}` },
        },
      );
      return response.data;
    },
    onSuccess: () => {
      console.log("data is sending");
      reset();
      onSuccess?.();
    },
  });

  const onSubmit: SubmitHandler<ServiceInputs> = (data) => {
    mutate(data);
  };

  return (
    <Sheet>
      <SheetTrigger>
        <Button
          variant="ghost"
          size="sm"
          className="h-8 px-2 text-primary hover:bg-primary/10 hover:text-primary flex items-center gap-1"
        >
          <Plus className="w-4 h-4" />
          Add Service
        </Button>
      </SheetTrigger>

      <SheetContent side="right" className="w-100 sm:w-135">
        <SheetHeader className="mb-6">
          <SheetTitle className="text-2xl font-bold">
            Add a New Service
          </SheetTitle>
          <SheetDescription>
            Fill out the details below to add a service to your profile.
          </SheetDescription>
        </SheetHeader>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4 p-4"
          noValidate
        >
          <div>
            <label className="block text-sm font-medium text-foreground mb-1">
              Service Title
            </label>
            <Input
              {...register("title")}
              placeholder="e.g., Emergency Drain Cleaning"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-1">
              Category
            </label>
            <select {...register("category")} className="...">
              <option value="">Select a category...</option>
              <option value="plumbing">Plumbing</option>
              <option value="electrical">Electrical</option>
              <option value="carpentry">Carpentry</option>
              <option value="painting">Painting</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-1">
              Price ($ / Hour)
            </label>
            <Input
              {...register("price", { valueAsNumber: true })}
              type="number"
              placeholder="85.00"
              min="0"
              step="0.01"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-1">
              Description
            </label>
            <textarea
              {...register("description")}
              placeholder="Describe what this service includes..."
              rows={4}
              className="..."
            />
          </div>

          <div className="flex gap-2 pt-4">
            <Button
              type="submit"
              className="flex-1 bg-primary text-primary-foreground"
              disabled={isPending}
            >
              {isPending ? "Saving..." : "Save Service"}
            </Button>
          </div>
        </form>
      </SheetContent>
    </Sheet>
  );
};

export default AddServiceSheet;
