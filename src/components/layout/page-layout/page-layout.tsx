import { PageLayoutContent } from "./page-layout.content";
import {
  PageLayoutDescription,
  PageLayoutHeader,
  PageLayoutTitle,
} from "./page-layout.header";

/**
 * The page-level scaffolding a content route sits in, as a compound namespace.
 * `Header` and `Content` are siblings, not nested — a page composes both:
 *
 * ```tsx
 * <PageLayout.Header>
 *   <PageLayout.Title>{title}</PageLayout.Title>
 *   <PageLayout.Description>{description}</PageLayout.Description>
 * </PageLayout.Header>
 * <PageLayout.Content>...</PageLayout.Content>
 * ```
 *
 * Ticket 11 deliberately left this out of the shell — it is page scaffolding
 * rather than chrome. `<main id="main">` lives in `__root.tsx`, so nothing
 * here renders a landmark of its own.
 */
export const PageLayout = {
  Content: PageLayoutContent,
  Description: PageLayoutDescription,
  Header: PageLayoutHeader,
  Title: PageLayoutTitle,
};
