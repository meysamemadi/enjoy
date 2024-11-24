import { getDictionary } from '@/get-dictionary';
import { Locale } from '@/i18n-config';
import { Header } from './_components/header';
import { Team } from './_components/team';
import Footer from '../../components/footer/footer';
import { Licenses } from '../../components/licenses';

const AboutUs = async ({ params: { lang } }: { params: { lang: Locale } }) => {

  const dictionary = await getDictionary(lang);
  return (
    <div className="flex-1 bg-[#FAF5EF]">
      <Header lang={lang} />

      <div className='container   grid grid-cols-1 gap-[56px] lg:gap-[86px] mt-[56px] lg:mt-[86px]'>
        <Team
          title="product & tech team"
          subtitle=''
          color='#33281F'
          employees={[
            {
              name: "alireza",
              job: "developer",
              profile: "image"
            },
            {
              name: "alireza",
              job: "developer",
              profile: "image"
            },
            {
              name: "alireza",
              job: "developer",
              profile: "image"
            },
            {
              name: "alireza",
              job: "developer",
              profile: "image"
            }
          ]}
        />

        <Team
          right
          title="tourism"
          subtitle='tour'
          color='#C03635'
          employees={[
            {
              name: "alireza",
              job: "developer",
              profile: "image"
            },
            {
              name: "alireza",
              job: "developer",
              profile: "image"
            },
            {
              name: "alireza",
              job: "developer",
              profile: "image"
            },
            {
              name: "alireza",
              job: "developer",
              profile: "image"
            }
          ]}
        />

        <Team

          title="have your"
          subtitle='own trip'
          color='#F07148'
          employees={[
            {
              name: "alireza",
              job: "developer",
              profile: "image"
            },
            {
              name: "alireza",
              job: "developer",
              profile: "image"
            },
            {
              name: "alireza",
              job: "developer",
              profile: "image"
            },
            {
              name: "alireza",
              job: "developer",
              profile: "image"
            }
          ]}
        />

        <Team

          right
          title="Health"
          subtitle='tour'
          color='#43B8A2'
          employees={[
            {
              name: "alireza",
              job: "developer",
              profile: "image"
            },
            {
              name: "alireza",
              job: "developer",
              profile: "image"
            },
            {
              name: "alireza",
              job: "developer",
              profile: "image"
            },
            {
              name: "alireza",
              job: "developer",
              profile: "image"
            }
          ]}
        />

        <Team
          title="Educational"
          subtitle='tour'
          color='#497D59'
          employees={[
            {
              name: "alireza",
              job: "developer",
              profile: "image"
            },
            {
              name: "alireza",
              job: "developer",
              profile: "image"
            },
            {
              name: "alireza",
              job: "developer",
              profile: "image"
            },
            {
              name: "alireza",
              job: "developer",
              profile: "image"
            }
          ]}
        />

        <Team
          right
          title="persian"
          subtitle='shop'
          color='#A07E62'
          employees={[
            {
              name: "alireza",
              job: "developer",
              profile: "image"
            },
            {
              name: "alireza",
              job: "developer",
              profile: "image"
            },
            {
              name: "alireza",
              job: "developer",
              profile: "image"
            },
            {
              name: "alireza",
              job: "developer",
              profile: "image"
            }
          ]}
        />

        <Team
          title="business"
          subtitle='tour'
          color='#2697AD'
          employees={[
            {
              name: "alireza",
              job: "developer",
              profile: "image"
            },
            {
              name: "alireza",
              job: "developer",
              profile: "image"
            },
            {
              name: "alireza",
              job: "developer",
              profile: "image"
            },
            {
              name: "alireza",
              job: "developer",
              profile: "image"
            }
          ]}
        />

      </div>

          <Licenses />

          <Footer  dictionary={dictionary["footer"]}/>

    </div>
  )
}

export default AboutUs