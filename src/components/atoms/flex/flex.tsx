import { cn } from '@/lib/utils';
import { FlexProps, Flex as RadixFlex } from '@radix-ui/themes';

interface ComponentProps {
  children?: React.ReactNode;
}

const Flex = ({ children, className, ...props }: Readonly<ComponentProps & FlexProps>) => {
  return (
    <RadixFlex
      className={cn('flex', className)}
      {...props}
    >
      {children}
    </RadixFlex>
  );
};

export default Flex;
