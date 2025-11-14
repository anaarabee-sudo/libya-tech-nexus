import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const ServiceCard = ({ icon: Icon, title, description }: ServiceCardProps) => {
  return (
    <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-border bg-card">
      <CardHeader>
        <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
          <Icon className="w-7 h-7 text-accent group-hover:text-accent-foreground" />
        </div>
        <CardTitle className="text-xl text-foreground">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base text-muted-foreground leading-relaxed">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
