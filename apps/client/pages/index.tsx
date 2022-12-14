import styled from '@emotion/styled';
import { createStyles, Container, Text, Button, Group } from '@mantine/core';
import { GithubIcon } from '@mantine/ds';
import Link from 'next/link';
import { FeaturesGrid } from '../components/features';
import { Footer } from '../components/footer';
import { HeaderMegaMenu } from '../components/header';
const BREAKPOINT = '@media (max-width: 755px)';
const useStyles = createStyles((theme) => ({
  wrapper: {
    position: 'relative',
    boxSizing: 'border-box',
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
  },

  inner: {
    position: 'relative',
    paddingTop: 200,
    paddingBottom: 120,

    [BREAKPOINT]: {
      paddingBottom: 80,
      paddingTop: 80,
    },
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: 62,
    fontWeight: 900,
    lineHeight: 1.1,
    margin: 0,
    padding: 0,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,

    [BREAKPOINT]: {
      fontSize: 42,
      lineHeight: 1.2,
    },
  },

  description: {
    marginTop: theme.spacing.xl,
    fontSize: 24,

    [BREAKPOINT]: {
      fontSize: 18,
    },
  },

  controls: {
    marginTop: theme.spacing.xl * 2,

    [BREAKPOINT]: {
      marginTop: theme.spacing.xl,
    },
  },

  control: {
    height: 54,
    paddingLeft: 38,
    paddingRight: 38,

    [BREAKPOINT]: {
      height: 54,
      paddingLeft: 18,
      paddingRight: 18,
      flex: 1,
    },
  },
}));

export function Index() {
  const { classes } = useStyles();
  return (
    <div className={classes.wrapper}>
      <HeaderMegaMenu />
      <Container size={700} className={classes.inner}>
        <h1 className={classes.title}>
          A{' '}
          <Text component="span" variant="gradient" gradient={{ from: 'blue', to: 'cyan' }} inherit>
            powerful
          </Text>{' '}
          NGS market plice manager
        </h1>

        <Text className={classes.description} color="dimmed">
          今どのアイテムが売れるのかすぐ確認・報告しましょう！
        </Text>

        <Group className={classes.controls}>

          <Link href="/category">
            <Button
              size="xl"
              className={classes.control}
              variant="gradient"
              gradient={{ from: 'blue', to: 'cyan' }}

            >
              Get started
            </Button>
          </Link>

          <Button
            component="a"
            href="https://github.com/mantinedev/mantine"
            size="xl"
            variant="default"
            className={classes.control}
            leftIcon={<GithubIcon size={20} />}
          >
            GitHub
          </Button>
        </Group>
      </Container>
      <Footer links={[]} />
    </div>
  );
}

export default Index;
