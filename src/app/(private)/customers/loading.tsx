import { Loader } from 'lucide-react';

export default function Loading() {
  return (
    <div className="h-screen flex justify-center items-center">
      <Loader className="text-white w-14 h-14 animate-spin" />
    </div>
  );
}
