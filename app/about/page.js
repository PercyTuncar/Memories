import { title } from "@/components/primitives";
import {Button} from '@nextui-org/button'; 

export default function AboutPage() {
  return (
    <div>
      <h1 className={title()}>About</h1>
      <div>
      <Button  color="primary">Click me</Button>
    </div>
    </div>
  );
}
