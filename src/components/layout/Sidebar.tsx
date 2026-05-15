import { NavLink } from 'react-router-dom';
import { topicsData } from '../../data/topics';
import { motion } from 'framer-motion';

export function Sidebar() {
  return (
    <aside className="w-64 flex-shrink-0 h-[calc(100vh-80px)] sticky top-20 overflow-y-auto pr-4 hidden lg:block custom-scrollbar">
      <div className="py-4">
        {topicsData.map((category) => (
          <div key={category.id} className="mb-8">
            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3 px-3">
              {category.title}
            </h3>
            <div className="space-y-1">
              {category.topics.map((topic) => (
                <NavLink
                  key={topic.id}
                  to={`/topics/${topic.id}`}
                  className={({ isActive }) => `
                    flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-all duration-200
                    ${isActive 
                      ? 'bg-brand-blue/10 text-brand-blue font-medium' 
                      : 'text-slate-400 hover:bg-slate-800/50 hover:text-slate-200'}
                  `}
                >
                  {({ isActive }) => (
                    <>
                      <span>{topic.title}</span>
                      {isActive && (
                        <motion.div layoutId="sidebar-active" className="w-1.5 h-1.5 rounded-full bg-brand-blue" />
                      )}
                    </>
                  )}
                </NavLink>
              ))}
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
}