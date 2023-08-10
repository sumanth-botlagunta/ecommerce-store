'use client';
import { cn } from '@/lib/utils';
import { Category } from '@/store';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavlinksProps {
  data: Category[];
}
const Navlinks: React.FC<NavlinksProps> = ({ data }) => {
  const pathname = usePathname();

  const routes = data.map((route) => ({
    href: `/category/${route.id}`,
    label: route.name,
    active: pathname === `/category/${route.id}`,
  }));
  return (
    <nav className="flex gap-2">
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={cn(
            'font-bold text-sm tracking-tight text-neutral-500',
            route.active ? 'underline' : ''
          )}
        >
          {route.label}
        </Link>
      ))}
    </nav>
  );
};

export default Navlinks;
