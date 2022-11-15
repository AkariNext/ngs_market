import { Card, Container, createStyles, Grid, SimpleGrid, Skeleton, useMantineTheme, Avatar, Image, Text, Group, Stack, Popover, Button, HoverCard } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconChevronDown, IconPhoneCall, IconAt } from '@tabler/icons';
import { IItem } from 'apps/client/item';

import { fetchItems } from 'apps/client/services/item.service';
import { api } from 'apps/client/utils/api';
import { AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';
import { useState } from 'react';
import useSWR from 'swr';
const PRIMARY_COL_HEIGHT = 300;

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
  },

  title: {
    fontWeight: 700,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    lineHeight: 1.2,
  },

  body: {
    padding: theme.spacing.md,
  },
}));

interface UserInfoIconsProps {
  avatar: string;
  name: string;
  title: string;
  phone: string;
  email: string;
}

export default function () {
  const router = useRouter()
  const { classes } = useStyles()
  const theme = useMantineTheme();
  const SECONDARY_COL_HEIGHT = PRIMARY_COL_HEIGHT / 2 - theme.spacing.md / 2;
  const { data: items, error } = useSWR(`categories/${router.query.category}`, () => fetchItems(String(router.query.category)))

  const ItemPrice = (item: IItem) => {
    const [opened, { close, open }] = useDisclosure(false);
    return (
      <>
        <Group>
          <HoverCard width={280} shadow="md">
            <HoverCard.Target>
              <Group spacing={"xs"} position="left" align="center">
                <Text >￥3000</Text>
                <IconChevronDown size={14} stroke={1.5} />
              </Group>
            </HoverCard.Target>
            <HoverCard.Dropdown>
              <Stack>
              <Text size="sm">
                Ship1: 1000
              </Text>
              <Text size="sm">
                Ship1: 1000
              </Text>
              <Text size="sm">
                Ship1: 1000
              </Text>
              <Text size="sm">
                Ship1: 1000
              </Text>
              <Text size="sm">
                Ship1: 1000
              </Text>
              <Text size="sm">
                Ship1: 1000
              </Text>
              </Stack>
            </HoverCard.Dropdown>
          </HoverCard>
        </Group>
      </>
    )

  }

  return (<>
    {items &&
      <Container size="lg">
        <Grid gutter="md">
          <Grid.Col span={3}>
            <Skeleton height={SECONDARY_COL_HEIGHT} radius="md" animate={false} />
          </Grid.Col>
          <Grid.Col span={9}>
            {items.map((item) => <div style={{ marginBottom: '8px' }}>
              <Card withBorder radius="md" p={0} className={classes.card}>
                <Group noWrap spacing={0}>
                  <Image src={"https://img.game8.jp/7283881/04827ee749fa1fffaf294bb7c75ef444.png/show"} height={140} width={140} />
                  <div className={classes.body}>
                    <Text transform="uppercase" color="dimmed" weight={700} size="xs">
                      {/* {category} */}
                    </Text>
                    <Text className={classes.title} mt="xs" mb="md">
                      {item.name}
                    </Text>
                    <ItemPrice item={item}></ItemPrice>
                  </div>
                </Group>
              </Card>
            </div>)}
            {/* <Skeleton height={SECONDARY_COL_HEIGHT} radius="md" animate={false} /> */}
          </Grid.Col>
        </Grid>
      </Container>
    }
  </>
  );
}
