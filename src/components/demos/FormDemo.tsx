import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { CheckCircle2 } from 'lucide-react';

const schema = yup.object({
  username: yup.string().required('Kullanıcı adı zorunludur').min(3, 'En az 3 karakter olmalıdır'),
  email: yup.string().email('Geçerli bir e-posta giriniz').required('E-posta zorunludur'),
  password: yup.string().required('Şifre zorunludur').min(6, 'En az 6 karakter olmalıdır'),
}).required();

export function FormDemo() {
  const [successData, setSuccessData] = useState<any>(null);
  
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = (data: any) => {
    setSuccessData(data);
    setTimeout(() => setSuccessData(null), 3000);
  };

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-800">
        <h3 className="text-xl font-bold text-white mb-6">Kayıt Formu</h3>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-400 mb-1">Kullanıcı Adı</label>
            <input 
              {...register('username')} 
              className={`w-full bg-slate-950 border rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-brand-blue/50 ${errors.username ? 'border-red-500' : 'border-slate-700'}`}
              placeholder="johndoe"
            />
            {errors.username && <p className="text-red-500 text-xs mt-1">{errors.username.message}</p>}
          </div>
          
          <div>
            <label className="block text-sm font-medium text-slate-400 mb-1">E-posta</label>
            <input 
              {...register('email')} 
              className={`w-full bg-slate-950 border rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-brand-blue/50 ${errors.email ? 'border-red-500' : 'border-slate-700'}`}
              placeholder="john@example.com"
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-400 mb-1">Şifre</label>
            <input 
              type="password"
              {...register('password')} 
              className={`w-full bg-slate-950 border rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-brand-blue/50 ${errors.password ? 'border-red-500' : 'border-slate-700'}`}
              placeholder="••••••"
            />
            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
          </div>

          <button type="submit" className="w-full py-2.5 bg-brand-blue text-slate-900 font-bold rounded-lg hover:bg-brand-blue/90 transition-colors mt-6">
            Kayıt Ol
          </button>
        </form>
      </div>
      
      <div className="flex flex-col gap-4">
        <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-800 flex-1">
          <h4 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-4">Form Durumu</h4>
          {successData ? (
            <div className="flex flex-col items-center justify-center h-full text-center space-y-3">
              <CheckCircle2 size={48} className="text-green-500" />
              <p className="text-green-400 font-medium">Form Başarıyla Gönderildi!</p>
              <pre className="text-xs text-slate-400 bg-slate-950 p-3 rounded w-full text-left overflow-x-auto">
                {JSON.stringify(successData, null, 2)}
              </pre>
            </div>
          ) : (
            <div className="flex items-center justify-center h-full text-slate-500 text-sm">
              Form gönderilmeyi bekliyor...
            </div>
          )}
        </div>
      </div>
    </div>
  );
}