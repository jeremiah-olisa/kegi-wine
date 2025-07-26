import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { CreditCard, Plus, Wallet, History, Settings } from "lucide-react";

export default function WalletPage() {
  return (
    <MainLayout title="Wallet" subtitle="Manage your payment methods and balance">
      <div className="px-4 mt-6 space-y-6">
        {/* Balance Card */}
        <div className="rounded-lg bg-gradient-to-r from-primary to-primary/80 p-6 text-white">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Available Balance</h3>
            <Wallet className="h-6 w-6" />
          </div>
          <div className="text-3xl font-bold mb-2">$245.67</div>
          <p className="text-primary-foreground/80">Last updated: 2 minutes ago</p>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-4">
          <Button className="flex items-center gap-2 p-4 h-auto">
            <Plus className="h-5 w-5" />
            <span>Add Money</span>
          </Button>
          <Button variant="outline" className="flex items-center gap-2 p-4 h-auto">
            <CreditCard className="h-5 w-5" />
            <span>Add Card</span>
          </Button>
        </div>

        {/* Payment Methods */}
        <div className="space-y-3">
          <h3 className="font-semibold text-lg">Payment Methods</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-4 rounded-lg bg-card">
              <div className="flex items-center gap-3">
                <div className="w-10 h-6 bg-blue-600 rounded"></div>
                <div>
                  <p className="font-medium">Visa ending in 4242</p>
                  <p className="text-sm text-muted-foreground">Expires 12/25</p>
                </div>
              </div>
              <Button variant="ghost" size="sm">Edit</Button>
            </div>
            <div className="flex items-center justify-between p-4 rounded-lg bg-card">
              <div className="flex items-center gap-3">
                <div className="w-10 h-6 bg-green-600 rounded"></div>
                <div>
                  <p className="font-medium">Mastercard ending in 8888</p>
                  <p className="text-sm text-muted-foreground">Expires 08/26</p>
                </div>
              </div>
              <Button variant="ghost" size="sm">Edit</Button>
            </div>
          </div>
        </div>

        {/* Recent Transactions */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-lg">Recent Transactions</h3>
            <Button variant="ghost" size="sm" className="flex items-center gap-1">
              <History className="h-4 w-4" />
              View All
            </Button>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-4 rounded-lg bg-card">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-lg">🍔</span>
                </div>
                <div>
                  <p className="font-medium">Classic Burger</p>
                  <p className="text-sm text-muted-foreground">Today, 2:30 PM</p>
                </div>
              </div>
              <span className="font-semibold text-destructive">-$12.99</span>
            </div>
            <div className="flex items-center justify-between p-4 rounded-lg bg-card">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-lg">🍷</span>
                </div>
                <div>
                  <p className="font-medium">Cabernet Sauvignon</p>
                  <p className="text-sm text-muted-foreground">Yesterday, 8:15 PM</p>
                </div>
              </div>
              <span className="font-semibold text-destructive">-$45.00</span>
            </div>
            <div className="flex items-center justify-between p-4 rounded-lg bg-card">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-lg text-green-600">+</span>
                </div>
                <div>
                  <p className="font-medium">Wallet Top-up</p>
                  <p className="text-sm text-muted-foreground">Dec 15, 10:30 AM</p>
                </div>
              </div>
              <span className="font-semibold text-green-600">+$100.00</span>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
} 