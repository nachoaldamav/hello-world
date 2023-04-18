import React from 'react';
import cx from 'classnames';
import type { HTMLAttributes } from 'react';
import { Button } from '@greeters/design.ui.button';
import { Heading } from '@greeters/design.ui.heading';
import { useHelloWorld } from '@greeters/hello-world.hooks.use-hello-world';
import './landing-page.scss'

export type LandingPageProps = {
  className?: string;
} & HTMLAttributes<HTMLDivElement>

export const LandingPage = ({className, ...rest}: LandingPageProps) => {
  const [helloWorldState, fetchHelloWorld] = useHelloWorld();


  if (helloWorldState.loading) {
    return <p {...rest}>Loading...</p>;
  }

  if (helloWorldState.error) {
    return <p {...rest}>Error: {helloWorldState.error.message}</p>;
  }
  
  return (
    <div className={cx("container", className)} {...rest}>
      {helloWorldState.data ? (
        <Heading>{helloWorldState.data}</Heading>
      ) : (
        <Button onClick={fetchHelloWorld}>Load Data</Button>
      )}
    </div>
  )
}