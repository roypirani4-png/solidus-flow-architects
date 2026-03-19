const SectionLabel = ({ children }: {children: string;}) => <span className="text-[6px] uppercase tracking-[0.2em] text-label mb-1 block">{children}</span>;





const Divider = () => <hr className="border-t border-border my-0" style={{ borderWidth: "0.5px" }} />;

const Index = () => {
  return (
    <div className="w-[210mm] min-h-[297mm] max-h-[297mm] mx-auto bg-background px-[18mm] py-[12mm] font-body text-body overflow-hidden print:px-[18mm] print:py-[12mm]">
      {/* HEADER */}
      <div className="flex justify-between items-start pb-2.5 border-b-[1.5px] border-foreground">
        <div>
            <h1 className="text-[22px] font-headline font-bold leading-none">
            Solidus<span className="text-primary">AI</span>
          </h1>
          <p className="text-[6.5px] uppercase tracking-[0.15em] text-label mt-0.5">AI Agents Agency</p>
        </div>
        <div className="text-right text-[7.5px] text-body leading-relaxed">
          <p>+972-54-495-6530</p>
          <p>roypirani4@gmail.com</p>
          <p className="text-label">Available on WhatsApp</p>
        </div>
      </div>

      {/* ONE LINER */}
      <div className="py-3">
        <h2 className="text-[18px] font-headline font-bold leading-tight text-foreground">
          Most AI agencies sell tools.<br />
          <span className="text-primary">We replace workflows.</span>
        </h2>
        <p className="text-[8px] text-body mt-1.5 leading-relaxed max-w-[85%]">
          We architect and build custom AI agent systems — from simple automations to complex multi-agent architectures — tailored to the exact operational reality of your business. Fully integrated into your existing systems. No disruption. No generic tools.
        </p>
      </div>

      <Divider />

      {/* PROBLEM & SOLUTION */}
      <div className="py-2.5">
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-card rounded-lg p-3">
            
            <h3 className="text-[10px] font-headline font-bold text-foreground mb-1">The Problem</h3>
            <p className="text-[7.5px] leading-relaxed">
              Most businesses know AI can help — but don't know where to start. They waste hours on repetitive tasks that could be automated, try generic AI tools that don't fit their workflow, and end up frustrated with no real results. The issue isn't AI — it's the lack of a system built for their specific reality.
            </p>
          </div>
          <div className="bg-card-solution rounded-lg p-3">
            
            <h3 className="text-[10px] font-headline font-bold text-foreground mb-1">The Solution</h3>
            <p className="text-[7.5px] leading-relaxed">
              Solidus AI starts with a deep operational diagnosis — before writing a single line of code. We identify the highest-leverage automation opportunities in your business, then architect and build a custom AI agent system that slots into your existing workflows and runs 24/7 without disruption.
            </p>
          </div>
        </div>
      </div>

      <Divider />

      {/* MARKET */}
      <div className="py-2.5">
        <SectionLabel>MARKET</SectionLabel>
        <div className="grid grid-cols-3 gap-3 mt-1">
          {[{ title: "Target Audience", text: "Large-scale operations in infrastructure, real estate, construction, and utilities — industries built on manpower, where AI has barely touched the surface." }, { title: "Market Opportunity", text: "The global AI agents market is projected to exceed $47B by 2030. Early adopters in professional services are gaining significant operational leverage — most haven't started yet." },
          { title: "Our Entry Point", text: "Businesses that tried generic AI tools, failed to see results, and now want something built for their specific reality. High intent, low noise." }].
          map((col) =>
          <div key={col.title} className="border border-border rounded-lg p-2.5">
              <h4 className="text-[8.5px] font-headline font-bold text-foreground mb-1">{col.title}</h4>
              <p className="text-[7px] leading-relaxed">{col.text}</p>
            </div>
          )}
        </div>
      </div>

      <Divider />

      {/* COMPETITIVE ADVANTAGE */}
      <div className="py-2.5">
        <SectionLabel>COMPETITIVE ADVANTAGE</SectionLabel>
        <div className="grid grid-cols-4 gap-0 mt-1 divide-x divide-border">
          {[
          { title: "Deep diagnosis first", text: "We don't sell before we understand. Every engagement starts with a thorough operational audit — identifying the exact gaps before a single line of code is written." },
          { title: "Hand-built, not no-code", text: "We build real systems from scratch — custom agent logic, memory, and integrations. Not drag-and-drop tools with limited flexibility." },
          { title: "Business-first thinking", text: "We focus on business outcomes, not technology for its own sake. Agents are a means to an end — faster operations, less overhead, more leverage." },
          { title: "Military-grade precision", text: "Operational thinking from Special Forces background. Systems designed to perform under pressure, at scale, without failure." }].
          map((item) =>
          <div key={item.title} className="px-2.5 first:pl-0 last:pr-0">
              <div className="flex items-center gap-1.5 mb-1">
                <span className="w-[5px] h-[5px] rounded-full bg-primary inline-block flex-shrink-0" />
                <h4 className="text-[8px] font-headline font-bold text-foreground">{item.title}</h4>
              </div>
              <p className="text-[6.5px] leading-relaxed">{item.text}</p>
            </div>
          )}
        </div>
      </div>

      <Divider />

      {/* THE TEAM */}
      <div className="py-2.5">
        <SectionLabel>THE TEAM</SectionLabel>
        <div className="border border-border rounded-lg p-3 mt-1 grid grid-cols-3 gap-3">
          <div>
            <h4 className="text-[8.5px] font-headline font-bold text-foreground mb-0.5">Roy Pirani</h4>
            <p className="text-[6.5px] text-label mb-1">Co-Founder</p>
            <p className="text-[6.5px] leading-relaxed">
              2.5 years designing and building custom AI agent systems across sales, research, and trading. Former Special Forces officer (Unit 669). Built and exited an AdTech company with 100K+ users. Translates complex business operations into intelligent, automated systems that perform.
            </p>
          </div>
          <div>
            <h4 className="text-[8.5px] font-headline font-bold text-foreground mb-0.5">Roey Zolicha</h4>
            <p className="text-[6.5px] text-label mb-1">Co-Founder</p>
            <p className="text-[6.5px] leading-relaxed">
              Economist and attorney. Built and scaled one of Israel's leading marketing agencies. Brings deep business, legal, and commercial expertise to every client engagement.
            </p>
          </div>
          <div>
            <h4 className="text-[8.5px] font-headline font-bold text-foreground mb-0.5">Why us?</h4>
            <p className="text-[6.5px] leading-relaxed mt-2.5">
              Over two years building AI systems for real businesses. We've built and run companies ourselves, so we understand the manual work and operational friction from the inside. We think in systems, we work well under complexity, and between our technical, legal, and operational backgrounds - we bring a combination most organizations won't find anywhere else.
            </p>
          </div>
        </div>
      </div>

      <Divider />

      {/* CTA */}
      <div className="bg-cta rounded-[8px] p-4 mt-2.5 flex justify-between items-center">
        <div>
          <h3 className="text-[11px] font-headline font-bold text-primary-foreground leading-tight">
            Ready to see what's possible for your business?
          </h3>
          <p className="text-[7.5px] text-label mt-1">
            Free diagnostic session — 45 minutes. We map your highest-leverage AI opportunities. No pitch.
          </p>
          <a
            href="mailto:roypirani4@gmail.com"
            className="inline-block mt-2 bg-primary text-primary-foreground text-[8px] font-medium px-4 py-1.5 rounded-md hover:opacity-90 transition-opacity">
            
            Book a free session
          </a>
        </div>
        <div className="text-right text-[7.5px] text-primary-foreground leading-relaxed">
          <p className="font-bold">Roy Pirani — Co-Founder, Solidus AI</p>
          <p>+972-54-495-6530</p>
          <p>roypirani4@gmail.com · WhatsApp available</p>
        </div>
      </div>

      {/* FOOTER */}
      <div className="flex justify-between items-center pt-2.5 mt-2.5 border-t border-border">
        <p className="text-[9px] font-headline font-bold">
          Solidus<span className="text-primary">AI</span>
        </p>
        <p className="text-[6.5px] text-label">
          ​
        </p>
      </div>
    </div>);

};

export default Index;