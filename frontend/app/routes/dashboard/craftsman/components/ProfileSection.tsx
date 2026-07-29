import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import AddServiceSheet from "./AddServiceSheet";
import { type Service } from "@/lib/validation";

type ProfileSectionProps = {
  user: { userId: string; name: string; email: string };
};

const ProfileSection = ({ user }: ProfileSectionProps) => {
  const queryClient = useQueryClient();

  const {
    data: services = [],
    isLoading,
    isError,
  } = useQuery<Service[]>({
    queryKey: ["services", user.userId],
    queryFn: async () => {
      const token = localStorage.getItem("token");
      const res = await axios.get(
        `http://localhost:3000/api/getServicesByUserId/${user.userId}`,
        { headers: { Authorization: `Bearer ${token}` } },
      );
      console.log("Services response:", res.data); // ← add this

      return res.data.services;
    },
    enabled: !!user?.userId,
  });
  if (isError) return <p>Failed to load services</p>;

  return (
    <div className="bg-card rounded-xl border border-border p-6 shadow-xs w-full">
      <h2 className="text-xl font-bold text-foreground mb-4">Your Profile</h2>
      <div className="space-y-4">
        <div>
          <p className="text-sm text-muted-foreground">Name</p>
          <p className="text-foreground font-medium">{user.name}</p>
        </div>
        <div>
          <p className="text-sm text-muted-foreground">Email</p>
          <p className="text-foreground font-medium">{user.email}</p>
        </div>

        <div>
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm text-muted-foreground">Services</p>
            <AddServiceSheet
              userId={user.userId}
              onSuccess={() =>
                queryClient.invalidateQueries({ queryKey: ["services"] })
              }
            />
          </div>

          <div className="flex flex-wrap gap-1 mt-1">
            {services.map((service) => (
              <span
                key={service.id}
                className="text-xs bg-secondary text-foreground px-2 py-1 rounded"
              >
                {service.title}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
