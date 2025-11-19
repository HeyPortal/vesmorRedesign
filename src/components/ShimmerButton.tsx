import ShimmerButton from "@/components/ui/shimmer-button";
import { Link, useNavigate } from "react-router-dom";


interface ShimmerBtnProps {
  // children: React.ReactNode
  text: string;
  link: string;
}

export function ShimmerBtn(props: ShimmerBtnProps) {

  const navigate = useNavigate();

  return (
    <div className="z-10 flex min-h-64 items-center justify-center">
      <ShimmerButton className="shadow-2xl" 
      shimmerSize="0.3em"
      borderRadius="50px"
      background= 'rgba(0, 0, 0, .8)'
      shimmerColor="#FCD512"
      onClick={()=> navigate(props.link)}>
      {props.text}
      </ShimmerButton>
    </div>
  );
}
