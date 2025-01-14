import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { ArrowLeft } from "lucide-react";

const AuthScreen = () => {
  const { t, language } = useLanguage();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle authentication
    console.log("Auth submission:", { email, password, name });
    toast({
      title: isLogin ? "Login Successful" : "Signup Successful",
      description: "Welcome to FINLAB!",
    });
    navigate("/home");
  };

  return (
    <div className={`min-h-screen bg-gradient-to-br from-primary to-secondary p-6 ${language === "ar" ? "rtl" : "ltr"}`}>
      <Button
        variant="ghost"
        onClick={() => navigate("/")}
        className="text-white hover:text-white/80 mb-6"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        {t("auth.back")}
      </Button>

      <Card className="max-w-md mx-auto">
        <CardHeader>
          <h1 className="text-2xl font-bold text-center">
            {isLogin ? t("auth.login") : t("auth.signup")}
          </h1>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            {!isLogin && (
              <div className="space-y-2">
                <label className="text-sm font-medium">{t("auth.name")}</label>
                <Input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={t("auth.namePlaceholder")}
                  required={!isLogin}
                />
              </div>
            )}
            <div className="space-y-2">
              <label className="text-sm font-medium">{t("auth.email")}</label>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t("auth.emailPlaceholder")}
                required
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">{t("auth.password")}</label>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder={t("auth.passwordPlaceholder")}
                required
              />
            </div>
            <Button type="submit" className="w-full">
              {isLogin ? t("auth.loginButton") : t("auth.signupButton")}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button
            variant="link"
            onClick={() => setIsLogin(!isLogin)}
            className="text-sm"
          >
            {isLogin ? t("auth.noAccount") : t("auth.hasAccount")}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default AuthScreen;