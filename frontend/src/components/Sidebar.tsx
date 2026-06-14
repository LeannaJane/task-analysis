import { useContext } from 'react';
import { themeStyles } from '../Themes';
import { ThemeContext } from '../hooks/ThemeProvider';
import { LayoutDashboard, Settings, User, Mail, LogOut } from 'lucide-react';

const navItems = [
  { name: 'Dashboard', icon: LayoutDashboard, path: '/dashboard' },
  { name: 'Profile', icon: User, path: '/profile' },
  { name: 'Messages', icon: Mail, path: '/messages' },
  { name: 'Settings', icon: Settings, path: '/settings' },
];

export const Sidebar = () => {
  const { theme } = useContext(ThemeContext);
  const styles = themeStyles[theme].sidebar;

  return (
    <aside className={`w-64 h-screen flex flex-col transition-colors duration-300 ${styles.bg} ${styles.text}`}>
      <div className="p-6 text-xl font-bold border-b border-opacity-20 border-gray-500">
        Task Analysis
      </div>

      <nav className="flex-1 p-4 space-y-2">
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.path}
            className={`flex items-center gap-3 p-3 rounded-lg transition-all duration-200 
              ${styles.hover} hover:translate-x-1`}
          >
            <item.icon size={20} />
            <span className="font-medium">{item.name}</span>
          </a>
        ))}
      </nav>

      <div className="p-4 border-t border-opacity-20 border-gray-500">
        <button className="flex items-center gap-3 w-full p-3 text-red-400 hover:bg-red-500 hover:bg-opacity-10 rounded-lg transition-colors">
          <LogOut size={20} />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
};