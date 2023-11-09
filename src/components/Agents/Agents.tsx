import { agents } from "../../lib/data";
import AgentItem from "./AgentItem";
const Agents = () => {
  return (
    <>
      <section className="relative z-10 custom-container bg-default pt-10 md:pt-0 pb-10">
        <h1 className="text-center text-primary-dark font-medium">Meet Our</h1>
        <h2 className="text-center text-3xl">Agents</h2>
        <p className="text-center text-black/60 mt-2 mb-7">
          Get in touch with our real estate experts.
        </p>
        <div className={`relative duration-300 pb-10 `}>
          <div
            className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 lg:gap-7 duration-200`}
          >
            {agents.map((agent) => (
              <div
                key={agent.id}
                className={`md:[&:nth-child(4)]:col-span-3 md:[&:nth-child(4)]:justify-self-center md:[&:nth-child(4)]:w-[calc(33.33%-30px)] lg:[&:nth-child(4)]:w-full lg:[&:nth-child(4)]:col-span-1 relative `}
              >
                <AgentItem data={agent} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Agents;
