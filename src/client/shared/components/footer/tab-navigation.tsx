'use client';

import { Link, usePathname } from '@/client/shared/navigation';
import { Home, Info } from 'lucide-react';
import { clsx } from 'clsx';

export function TabNavigation() {
    const pathname = usePathname();

    const navItems = [
        {
            label: '메인',
            href: '/',
            icon: Home,
        },
        {
            label: '정보',
            href: '/about',
            icon: Info,
        },
    ];

    return (
        <nav
            className="fixed bottom-0 left-0 right-0 bg-white border-t border-[#f2f4f6] flex items-center justify-around bg-opacity-80 backdrop-blur-lg"
            style={{
                height: 'calc(60px + env(safe-area-inset-bottom))',
                paddingBottom: 'env(safe-area-inset-bottom)',
                zIndex: 1000
            }}
        >
            {navItems.map((item) => {
                const isActive = pathname === item.href;
                const Icon = item.icon;

                return (
                    <Link
                        key={item.href}
                        href={item.href}
                        className={clsx(
                            'flex flex-col items-center justify-center flex-1 h-full gap-1 transition-colors',
                            isActive ? 'text-[#3182f6]' : 'text-[#8b95a1]'
                        )}
                        style={{ height: '60px' }}
                    >
                        <Icon size={20} />
                        <span className="text-[10px] font-medium">{item.label}</span>
                    </Link>
                );
            })}
        </nav>
    );
}
