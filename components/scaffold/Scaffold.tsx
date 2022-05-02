export default function Scaffold({ children }: any) {
  return (
    <div className="w-full h-full overflow-hidden md:flex md:flex-col md:items-center">
      {children}
    </div>
  );
}
