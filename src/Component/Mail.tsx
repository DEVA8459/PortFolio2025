const Mail = () => {
  return (
    <div className="flex  text-secondary items-center gap-10 fixed bottom-58 -right-48 text-2xl rotate-90">
      <div className="flex" data-aos-duration="800" data-aos="fade-down-left">
        <a
          href="mailto:dgdev907@gmail.com"
          className="font-mono tracking-wide hover:text-primary hover:-translate-x-1 transition-transform duration-300 ease-in-out"
          aria-label="Send an email to dgdev907@gmail.com"
        >
          dgdev907@gmail.com
        </a>
      </div>
      <hr className="border w-40 rounded-full  bg-secondary border-secondary" />
    </div>
  );
};
export default Mail;
