import { cn } from '@/lib/utils';
import { Button } from './ui/Button';

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

const UserAuthForm = ({ className, ...props }: UserAuthFormProps) => {

  return (
    <div className={cn('flex justify-center', className)} {...props}>
      <Button size='sm' className='w-full'>
        Google
      </Button>
    </div>
  );
};

export default UserAuthForm;
