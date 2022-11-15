

const CATEGORIES = [
  {
    name: "特殊能力",
    iconUrl: "https://s3.akarinext.org/assets/*/pso2/base_image/262c5b242d606fd75f12f71bbb7c96e6.png"
  },
  {
    name: "武器迷彩",
    iconUrl: "https://s3.akarinext.org/assets/*/pso2/base_image/262c5b242d606fd75f12f71bbb7c96e6.png"
  },
  {
    name: "武器迷彩",
    iconUrl: "https://s3.akarinext.org/assets/*/pso2/base_image/262c5b242d606fd75f12f71bbb7c96e6.png"
  },
  {
    name: "武器迷彩",
    iconUrl: "https://s3.akarinext.org/assets/*/pso2/base_image/262c5b242d606fd75f12f71bbb7c96e6.png"
  }
]
import {
  createStyles,
  Badge,
  Group,
  Title,
  Text,
  Card,
  SimpleGrid,
  Container,
} from '@mantine/core';
import { IconGauge, IconUser, IconCookie } from '@tabler/icons';
import { Footer } from '../../components/footer';
import { HeaderMegaMenu } from '../../components/header';
import { motion } from 'framer-motion'
import { NextSeo } from 'next-seo';
import Link from 'next/link';

const mockdata = [
  {
    title: '特殊能力',
    tag: 'op',
    description:
      'ライト勢におすすめ',
    icon: "https://img.game8.jp/5924580/d834ebe0123d525508528f482f18019e.png/show",
  },
  {
    title: '武器',
    tag: 'weapon',
    description:
      '一攫千金のチャンス',
    icon: "https://img.game8.jp/7283881/04827ee749fa1fffaf294bb7c75ef444.png/show",
  },
  {
    title: '消耗品',
    tag: 'supplies',
    description:
      'スクラッチで楽に金策を',
    icon: "https://img.game8.jp/5924580/d834ebe0123d525508528f482f18019e.png/show",
  },
];

const useStyles = createStyles((theme) => ({
  title: {
    fontSize: 34,
    fontWeight: 900,
    [theme.fn.smallerThan('sm')]: {
      fontSize: 24,
    },
  },

  description: {
    maxWidth: 600,
    margin: 'auto',

    '&::after': {
      content: '""',
      display: 'block',
      backgroundColor: theme.fn.primaryColor(),
      width: 45,
      height: 2,
      marginTop: theme.spacing.sm,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },

  card: {
    border: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1]
      }`,
  },

  cardIcon: {
    borderRadius: '14px'
  },

  cardTitle: {
    '&::after': {
      content: '""',
      display: 'block',
      backgroundColor: theme.fn.primaryColor(),
      width: 45,
      height: 2,
      marginTop: theme.spacing.sm,
    },
  },
}));

export default function FeaturesCards() {
  const { classes, theme } = useStyles();
  const features = mockdata.map((feature) => (
    <motion.div whileHover={{ transition: { duration: 0.1 }, transform: 'translateY(-3px)' }}>
      <Link href={{pathname: `/categories/[category]`, query: {category: feature.tag}}}>
      <Card key={feature.title} shadow="md" radius="md" className={classes.card} p="xl">
        {/* <feature.icon size={50} stroke={2} color={theme.fn.primaryColor()} /> */}
        <img src={feature.icon} width={50} className={classes.cardIcon} />
        <Text size="lg" weight={500} className={classes.cardTitle} mt="md">
          {feature.title}
        </Text>
        <Text size="sm" color="dimmed" mt="sm">
          {feature.description}
        </Text>
      </Card>
      </Link>
    </motion.div>
  ));

  return (
    <>
    <NextSeo title="カテゴリ一覧 - NGS MARKET"/>
      <HeaderMegaMenu />
      <Container size="lg" py="xl">
        <Title order={2} className={classes.title} align="center" mt="sm">
          All Categories
        </Title>

        <Text color="dimmed" className={classes.description} align="center" mt="md">
          全てのカテゴリを確認しましょう！
        </Text>

        <SimpleGrid cols={3} spacing="xl" mt={50} breakpoints={[{ maxWidth: 'md', cols: 1 }]} >
          {features}
        </SimpleGrid>
      </Container>
      <Footer links={[]} />
    </>
  );
}
