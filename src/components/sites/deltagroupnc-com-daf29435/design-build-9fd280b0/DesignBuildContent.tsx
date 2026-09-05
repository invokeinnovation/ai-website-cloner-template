import Image from "next/image";
import Link from "next/link";

const IMG = "/sites/deltagroupnc-com-daf29435/design-build-9fd280b0/images";

const TIPS: { title: string; body: string }[] = [
  { title: "1. Build a great team.", body: "In construction, your people are your business. Hire dependable, knowledgeable and skilled employees. Retain your best employees by promoting and rewarding them for their hard work and reliability." },
  { title: "2. Manage your business, but lead your people.", body: "Your employees want to be led, not managed. Be a great leader and your employees will follow you anywhere. If you try and manage every aspect of your employees work they will think you have no confidence in their ability to make good decisions and properly do their jobs." },
  { title: "3. Invest in your business.", body: "If you want to earn more business you have to invest time and money into your company. This means buying new equipment and technology when needed, training your employees and actively marketing your business." },
  { title: "4. Be selective to be profitable.", body: "It’s not enough to just earn more business. When you take on more work it has to profitable. There’s no sense in doubling the number of jobs you work if you aren’t increasing your profits." },
  { title: "5. Get the word out.", body: "Word of mouth remains the number one method most construction companies use to market their business and earn more work. Encourage your best customers to tell others about the great work your company does." },
  { title: "6. Play to your strengths.", body: "Would you rather have your company be known as a decent all-around general contracting firm or the best general contractor doing LEED-certified hotel renovations? Finding a niche market or specializing in a specific industry can set you apart from your competitors." },
  { title: "7. Network to earn more work.", body: "One of the best ways to network is to join and be active in the local chapter of a trade association. Networking can be a useful tool to build brand awareness for your company, generate leads and find vendors. Being active and giving back to your community is also a great networking opportunity for your business." },
  { title: "8. Quality is king.", body: "Tread carefully when considering any measure that could sacrifice the quality of your work. Cutting corners to reduce costs speed up completion of a project can be detrimental. Your company’s reputation for doing quality work is only as good as your last project so never compromise your high standards of performing quality work." },
  { title: "9. Change is good.", body: "Adaptability is one of the keys to success in the construction industry. As we’ve seen with the recent recession, construction can be quite a volatile industry. If you are unwilling to make adjustments in your business to keep up with the changing trends you are setting yourself up for failure." },
  { title: "10. Give great customer service.", body: "Pleasing your clients should be a top priority. This doesn’t mean you have to cave to their every demand. You should be actively communicating with your client on all aspects of a project so you can be equal partners in the decision-making process. Satisfied customers will lead to repeat business and great referrals." },
  { title: "11. Be proactive, not reactive.", body: "You can’t just sit back and expect more work to just fall in your lap. You have to proactively seek out new opportunities to retain and grow your business. Constantly reach out to the owners, architects and general contractors you find out what projects they have on the horizon." },
  { title: "12. Make smart decisions.", body: "We make thousands of decisions every day, many of which are inconsequential. When it comes to earning more business, this often means making hard decisions that will impact your success for years to come. Take the time to consider all angles and options and perform your due diligence for future success. Never get pressured into making rash or impulsive decisions" },
];

function NumberedHeader({ n, title }: { n: string; title: string }) {
  return (
    <div className="mb-6 mt-14">
      <div className="text-[46px] font-bold leading-none text-[#ee171f]">{n}</div>
      <h3 className="mt-2 text-[26px] font-bold text-neutral-900">{title}</h3>
    </div>
  );
}

export function DesignBuildContent() {
  return (
    <>
      {/* Hero */}
      <div className="relative h-[300px] w-full sm:h-[520px]">
        <Image src={`${IMG}/Under-Construction.webp`} alt="Building under construction" fill priority className="object-cover" />
      </div>

      <section className="bg-[#f4f6f6]">
        <div className="mx-auto w-full max-w-[860px] px-[15px] py-16">
          {/* Attention to Detail */}
          <h1 className="text-center text-[40px] font-bold text-[#eb1a1d] sm:text-[52px]">Design/Build</h1>
          <h2 className="mt-8 text-center text-[24px] font-bold text-neutral-800">Attention to Detail</h2>
          <p className="mt-5 text-[15.6px] leading-[26px] text-[#555]">
            Starting from scratch is not easy, so let us do the guess work. We offer design services, such as
            Architectural drawings and Engineering services, making your build a smoother process. Finding the
            right commercial contractor is often times painstaking and time consuming, so we invite you to come
            see our current jobs. Please call our office at 919-263-4910 to schedule your site walk.
          </p>
          <div className="mt-8 text-center">
            <Link
              href="/contact"
              className="inline-block rounded bg-[#ee171f] px-7 py-3 text-[14px] font-bold uppercase tracking-wide text-white transition-colors hover:bg-[#c8121a]"
            >
              Contact Us
            </Link>
          </div>

          {/* Purposeful Career */}
          <h2 className="mt-16 text-center text-[30px] font-bold uppercase tracking-wide text-neutral-900">
            Purposeful Career
          </h2>

          {/* 01 */}
          <NumberedHeader n="01." title="Accredited qualifications" />
          <div className="space-y-4 text-[15.6px] leading-[26px] text-[#555]">
            <p>
              The Construction Professional Accreditation Scheme (CPAS) is an official recognition programme
              specially developed by The Singapore Contractors Association Ltd (SCAL) for personnel performing
              the roles and duties of a project director, manager, engineer or equivalent in the built
              environment. CPAS is endorsed by the Central Procurer Panel led by the Building and Construction
              Authority (BCA).
            </p>
            <p>
              In alignment with the Construction Industry Transformation Map, CPAS aims to raise the standard of
              construction professionals working in the industry, by recognising project managers through
              competency standards which are meticulously curated to promote and gauge professional practices.
              The Scheme promotes sustainability and will lead the industry to achieve better project outcomes
              through higher management skills, improved productivity and better environmental, health and
              safety practices.
            </p>
            <p>The accreditation of project managers is based on the following seven competencies identified:</p>
          </div>

          {/* 02 */}
          <NumberedHeader n="02." title="Powerful possibilities" />
          <div className="space-y-6">
            {TIPS.map((tip) => (
              <div key={tip.title}>
                <h4 className="text-[18px] font-bold text-neutral-900">{tip.title}</h4>
                <p className="mt-2 text-[15.6px] leading-[26px] text-[#555]">{tip.body}</p>
              </div>
            ))}
          </div>

          {/* 03 */}
          <NumberedHeader n="03." title="Sustainable design" />
          <div className="space-y-4 text-[15.6px] leading-[26px] text-[#555]">
            <p>
              Sustainable design in construction – sometimes also called environmentally conscious design or eco
              design – is the philosophy of designing a built environment to comply with the principles of
              ecological sustainability. In essence, it aims to eliminate the negative environmental impact that
              a building generates.
            </p>
            <p>
              The difference between passive design and sustainable design is that sustainable design can be
              made up of both active and passive design: It is not exclusive to the passive design methodology
              of using what is available naturally. It can also include actively increasing sustainability by
              generating energy. It can also look at other aspects of design such as energy conservation and use
              of sustainably sourced materials.
            </p>
            <p>
              It is potentially a more holistic approach that meets more needs than passive alone. However, the
              more active design aspects mean you have a greater the need for materials and infrastructure, so
              you might argue that the more you rely on passive design, the greater sustainability you achieve.
            </p>
            <p className="font-semibold text-neutral-800">Commonly used areas of sustainable design:</p>
            <p>
              <strong>Energy efficiency.</strong> Making sure that the energy a building uses isn’t wasted is
              the biggest no brainer and is one of the oldest forms of sustainable design – dating back to the
              1940s and made popular in the 1970s-1980s. In 2021 and beyond, for more ambitious constructions
              this goes beyond loft insulation! Architects and engineers are looking at every aspect of a
              building to identify areas where they can minimise the loss of energy, and this includes external
              and internal materials. At Farrat, our structural thermal breaks are frequently used for this very
              reason, as the most efficient and responsible way to thermally separate structural connections and
              prevent heat loss in the building envelope.
            </p>
            <p>
              <strong>Using natural energy to generate of power.</strong> Wind, solar and even wave power
              generation is on the rise and there are whole buildings or even cities powered in this way. For
              example, Adelaide’s municipal operations have been powered entirely by renewable energy since July
              2020. At Farrat, we are working with responsible companies across the world to design and
              manufacture bespoke industrial vibration control solutions to isolate renewable energy power
              plants, such as hydro-electric power dams. Generating your own power comes with its engineering
              challenges. In addition to ensuring the optimal construction and placement of the equipment
              itself, ensuring there are not adverse side effects to energy generation is essential to the
              comfort and security of buildings in habitants. An example of this might be ensuring that the
              impact of any vibrations caused by a window turbine is reduced with Building Vibration Isolation.
            </p>
            <p>
              <strong>Rainwater harvesting.</strong> Desert climate cities led the way is the use of rainwater
              in building design. For example, Madurai is a city in India of over 1 million people where 83% of
              buildings use rainwater harvesting.
            </p>
            <p>
              Closer to home there are central buildings where it has been added to the design. For example, the
              Museum of London was built in the 1970s but in 2011 they rolled out their new rainwater harvesting
              initiative, with a 25,000-litre tank that both flushes the toilets and irrigates gardens. Rainwater
              harvesting is now a passive design being introduced at planning stage.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
