import Card from "@/components/home/card";
import Layout from "@/components/layout";
import ComponentGrid from "@/components/home/component-grid";

const Home = () => {
  return (
    <Layout>
      {/* here we are animating with Tailwind instead of Framer Motion because Framer Motion messes up the z-index for child components */}
      <div className="my-10 grid w-full max-w-screen-xl animate-[slide-down-fade_0.5s_ease-in-out] grid-cols-1 gap-5 px-5 md:grid-cols-3 xl:px-0">
	<Card
	  title='Beautiful, reusable components'
	  description='Pre-built beautiful, a11y-first components, powered by [Tailwind CSS](https://tailwindcss.com/), [Radix UI](https://www.radix-ui.com/), and [Framer Motion](https://framer.com/motion)'
	  demo={<ComponentGrid />}
	  large={true}
	/>
      </div>
    </Layout>
  );
};

export default Home;
