import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { IModalProps } from '@/types/components/atoms/modal';

const Modal = ({ title, children, open, setOpen }: IModalProps) => {

  const handleModalChange = () => {
    setOpen(!open);
  };

  return (
    <Dialog open={open} onOpenChange={handleModalChange}>
      <DialogContent className='bg-white'>
        <DialogHeader>
          <DialogTitle>
            <h3 className='text-base font-bold text-primary'>{title}</h3>
          </DialogTitle>
          <DialogDescription>
            {children}
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
