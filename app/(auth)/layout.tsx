export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
  <div className="flex items-center justify-center w-full"> 
    {children}
    </div>
  )
}

//It uses destructuring to extract the children prop from the component's props.