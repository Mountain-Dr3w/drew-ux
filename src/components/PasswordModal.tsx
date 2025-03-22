
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Form, FormField, FormItem, FormControl, FormMessage } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { useToast } from '@/hooks/use-toast';
import { Lock, AlertCircle } from 'lucide-react';

interface PasswordModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

interface PasswordForm {
  password: string;
}

const PasswordModal: React.FC<PasswordModalProps> = ({ open, onOpenChange }) => {
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const form = useForm<PasswordForm>({
    defaultValues: {
      password: '',
    },
  });

  const onSubmit = (data: PasswordForm) => {
    if (data.password === 'goceltics') {
      localStorage.setItem('caseStudyAccess', 'true');
      onOpenChange(false);
      setError(false);
      toast({
        title: "Access Granted",
        description: "You now have access to case studies",
      });
    } else {
      setError(true);
      form.reset();
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Lock className="w-5 h-5" />
            <span>Case Study Access Required</span>
          </DialogTitle>
          <DialogDescription>
            Please enter the password to view this case study.
          </DialogDescription>
        </DialogHeader>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input 
                      type="password" 
                      placeholder="Enter password" 
                      {...field} 
                      className={error ? "border-red-500" : ""}
                      autoFocus
                    />
                  </FormControl>
                  {error && (
                    <FormMessage className="flex items-center gap-2">
                      <AlertCircle className="w-4 h-4" />
                      Incorrect password. Please try again.
                    </FormMessage>
                  )}
                </FormItem>
              )}
            />
            <div className="flex justify-end">
              <Button type="submit">Submit</Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default PasswordModal;
