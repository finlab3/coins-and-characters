
import { useLanguage } from "../contexts/LanguageContext";
import { Book, Trophy, User } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const { t, language } = useLanguage();
  const location = useLocation();

  // Don't show navigation on welcome screen or auth screens
  if (location.pathname === '/' || location.pathname === '/login' || location.pathname === '/signup') {
    return null;
  }

  const navItems = [
    { icon: Book, label: "nav.lessons", path: "/lessons" },
    { icon: Trophy, label: "nav.rewards", path: "/rewards" },
    { icon: User, label: "nav.profile", path: "/profile" },
  ];

  return (
    <nav className={`fixed bottom-0 left-0 right-0 bg-white shadow-lg ${language === "ar" ? "rtl" : "ltr"}`}>
      <div className="flex justify-around items-center p-4">
        {navItems.map(({ icon: Icon, label, path }) => {
          const isActive = location.pathname === path || 
                          (path === "/lessons" && location.pathname === "/home") ||
                          (path === "/rewards" && location.pathname === "/progress");
          return (
            <Link
              key={path}
              to={path}
              className={`flex flex-col items-center space-y-1 ${
                isActive ? "text-primary" : "text-gray-500"
              }`}
            >
              <Icon className="w-6 h-6" />
              <span className="text-xs font-medium">{t(label)}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Navigation;

