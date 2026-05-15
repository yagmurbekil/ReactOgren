import { useMemo } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { topicsData } from '../data/topics';
import { CodeBlock } from '../components/common/CodeBlock';
import { Lightbulb, Info, MonitorPlay } from 'lucide-react';
import { motion } from 'framer-motion';

// Demos
import { StateDemo } from '../components/demos/StateDemo';
import { EffectDemo } from '../components/demos/EffectDemo';
import { ContextDemo } from '../components/demos/ContextDemo';
import { FormDemo } from '../components/demos/FormDemo';
import { ReduxDemo } from '../components/demos/ReduxDemo';
import { RouterDemo } from '../components/demos/RouterDemo';

const DEMOS: Record<string, React.ReactNode> = {
  'state-demo': <StateDemo />,
  'effect-demo': <EffectDemo />,
  'context-demo': <ContextDemo />,
  'form-demo': <FormDemo />,
  'redux-demo': <ReduxDemo />,
  'router-demo': <RouterDemo />
};

export function TopicContent() {
  const { id } = useParams<{ id: string }>();

  const topic = useMemo(() => {
    for (const category of topicsData) {
      const found = category.topics.find(t => t.id === id);
      if (found) return { ...found, categoryTitle: category.title };
    }
    return null;
  }, [id]);

  if (!topic) {
    return <Navigate to="/topics" replace />;
  }

  return (
    <motion.div 
      key={topic.id}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="max-w-4xl"
    >
      <div className="mb-8">
        <span className="text-brand-blue font-semibold text-sm mb-2 block tracking-wider uppercase">
          {topic.categoryTitle}
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
          {topic.title}
        </h1>
        <p className="text-xl text-slate-300 leading-relaxed">
          {topic.description}
        </p>
      </div>

      <div className="bg-brand-blue/10 border border-brand-blue/20 rounded-xl p-5 mb-10 flex gap-4 text-brand-blue/90">
        <Lightbulb className="shrink-0 mt-1" />
        <div>
          <h4 className="font-bold mb-1 text-white">Gerçek Hayat Benzetmesi</h4>
          <p className="text-sm leading-relaxed">{topic.analogy}</p>
        </div>
      </div>

      <div className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2 flex items-center gap-2">
          <Info size={24} className="text-purple-400" />
          Kod Örneği
        </h2>
        <CodeBlock code={topic.code} title={`${topic.id}.tsx`} />
        
        <div className="bg-slate-800/50 rounded-xl p-5 border border-slate-700/50 mt-4">
          <h4 className="font-semibold text-white mb-2 text-sm">Bu kod ne yapıyor?</h4>
          <p className="text-slate-300 text-sm leading-relaxed">{topic.codeExplanation}</p>
        </div>
      </div>

      {topic.demoId && DEMOS[topic.demoId] && (
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <MonitorPlay size={24} className="text-green-400" />
            İnteraktif Demo
          </h2>
          <div className="glass-panel rounded-2xl p-6 md:p-8">
            {DEMOS[topic.demoId]}
          </div>
        </div>
      )}
    </motion.div>
  );
}