
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const AdminSettings = () => {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Platform Settings</CardTitle>
          <CardDescription>Manage your platform's general settings</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="platformName">Platform Name</Label>
            <Input id="platformName" defaultValue="ReadJoy" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="supportEmail">Support Email</Label>
            <Input id="supportEmail" type="email" defaultValue="support@readjoy.com" />
          </div>
          <Button>Save Changes</Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Payment Settings</CardTitle>
          <CardDescription>Configure payment and subscription settings</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="monthlyPrice">Monthly Subscription Price (UGX)</Label>
            <Input id="monthlyPrice" type="number" defaultValue="20000" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="bookPrice">Default Book Price (UGX)</Label>
            <Input id="bookPrice" type="number" defaultValue="5000" />
          </div>
          <Button>Update Pricing</Button>
        </CardContent>
      </Card>
    </div>
  );
};
