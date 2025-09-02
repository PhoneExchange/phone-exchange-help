export function CurvedBg() {
  return (
    <div className="absolute w-full inset-0 -z-10">
      <div className=" bg-blue-100 h-72" />
      <svg className="top-0 left-0 w-full -z-10" viewBox="0 0 1440 320" preserveAspectRatio="none">
        <path d="M0,0 C480,160 960,-40 1440,120 L1440,0 Z" fill="#dbeafe" />
      </svg>
    </div>
  );
}
