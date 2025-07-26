import { MainLayout } from "@/components/layout/MainLayout";
import { userProfile } from "@/lib/hooks/use-food-data";
import { User, Mail, Phone, Settings, LogOut } from "lucide-react";

export default function ProfilePage() {
  return (
    <MainLayout title="Profile" subtitle="Manage your account and preferences">
      <div className="px-4 mt-6 space-y-6">
        {/* Profile Header */}
        <div className="flex items-center gap-4 p-4 rounded-lg bg-card">
          <img
            src={userProfile.avatar}
            alt={userProfile.name}
            className="w-16 h-16 rounded-full object-cover"
          />
          <div>
            <h3 className="font-semibold text-lg">{userProfile.name}</h3>
            <p className="text-muted-foreground">{userProfile.email}</p>
          </div>
        </div>

        {/* Contact Info */}
        <div className="space-y-3">
          <h3 className="font-semibold text-lg">Contact Information</h3>
          <div className="space-y-2">
            <div className="flex items-center gap-3 p-3 rounded-lg bg-card">
              <Mail className="h-5 w-5 text-muted-foreground" />
              <span>{userProfile.email}</span>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg bg-card">
              <Phone className="h-5 w-5 text-muted-foreground" />
              <span>{userProfile.phone}</span>
            </div>
          </div>
        </div>

        {/* Preferences */}
        <div className="space-y-3">
          <h3 className="font-semibold text-lg">Preferences</h3>
          <div className="space-y-2">
            <div className="p-3 rounded-lg bg-card">
              <p className="text-sm text-muted-foreground mb-1">
                Dietary Preferences
              </p>
              <div className="flex gap-2">
                {userProfile.preferences.dietary.map((diet) => (
                  <span
                    key={diet}
                    className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded"
                  >
                    {diet}
                  </span>
                ))}
              </div>
            </div>
            <div className="p-3 rounded-lg bg-card">
              <p className="text-sm text-muted-foreground mb-1">
                Favorite Categories
              </p>
              <div className="flex gap-2">
                {userProfile.preferences.favoriteCategories.map((category) => (
                  <span
                    key={category}
                    className="text-xs bg-primary/10 text-primary px-2 py-1 rounded"
                  >
                    {category}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="space-y-3">
          <h3 className="font-semibold text-lg">Account</h3>
          <div className="space-y-2">
            <button className="w-full flex items-center gap-3 p-3 rounded-lg bg-card hover:bg-accent transition-colors">
              <Settings className="h-5 w-5" />
              <span>Settings</span>
            </button>
            <button className="w-full flex items-center gap-3 p-3 rounded-lg bg-card hover:bg-accent transition-colors">
              <User className="h-5 w-5" />
              <span>Edit Profile</span>
            </button>
            <button className="w-full flex items-center gap-3 p-3 rounded-lg bg-card hover:bg-destructive/10 transition-colors text-destructive">
              <LogOut className="h-5 w-5" />
              <span>Sign Out</span>
            </button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
