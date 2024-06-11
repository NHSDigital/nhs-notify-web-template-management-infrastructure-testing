import { Button } from 'nhsuk-react-components';

export function NHSNotifyButton({
  children,
  href,
  ...rest
}: {
  children: React.ReactNode;
  href?: string;
} & React.ComponentProps<typeof Button>) {
  return (
    <Button {...rest} href={href}>
      {children}
    </Button>
  );
}
