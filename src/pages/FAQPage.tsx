import { Phone } from 'lucide-react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Card, CardContent } from '@/components/ui/card'

const faqs = [
  {
    id: 'care',
    question: 'How do I care for my new plants?',
    answer: 'Each plant comes with detailed care instructions. Generally, most plants need proper lighting, regular watering (but not overwatering), and occasional fertilizing. We\'re always available to answer specific questions about your plants.'
  },
  {
    id: 'delivery',
    question: 'Do you offer plant delivery?',
    answer: 'Yes! We offer local delivery within a 25-mile radius of our Eustis location. Delivery fees vary based on distance and order size. We also offer curbside pickup for your convenience.'
  },
  {
    id: 'survival',
    question: 'What if my plant doesn\'t survive?',
    answer: 'We stand behind the quality of our plants. If a plant doesn\'t survive within the first 30 days due to issues present at the time of purchase, we\'ll replace it or provide store credit. Proper care instructions must be followed.'
  },
  {
    id: 'garden-design',
    question: 'Can you help me design my garden?',
    answer: 'Absolutely! Our experienced staff can help you design indoor plant arrangements, suggest plants based on your space and lighting conditions, and provide guidance on creating beautiful green spaces in your home.'
  },
  {
    id: 'organic',
    question: 'Do you carry organic fertilizers and soil?',
    answer: 'Yes, we carry a full line of organic fertilizers, soils, and plant care products. We believe in sustainable gardening practices and are happy to recommend eco-friendly options for your plants.'
  },
  {
    id: 'outdoor-planting',
    question: 'What\'s the best time to plant outdoors?',
    answer: 'In Central Florida, the best times for outdoor planting are typically fall through early spring when temperatures are cooler. However, for indoor plants, any time of year is perfect! We can advise on the best timing for your specific needs.'
  },
  {
    id: 'workshops',
    question: 'Do you offer plant care workshops?',
    answer: 'Yes! We regularly host workshops on topics like repotting, plant propagation, seasonal plant care, and creating terrariums. Check our website or call us for upcoming workshop schedules and registration.'
  },
  {
    id: 'returns',
    question: 'Can I return a plant if it\'s not what I expected?',
    answer: 'We want you to be completely satisfied with your purchase. Plants can be returned within 7 days of purchase in their original condition. Live plants must be returned with proof of proper care during that period.'
  },
  {
    id: 'bulk-pricing',
    question: 'Do you offer bulk pricing for large orders?',
    answer: 'Yes! We offer discounts for bulk orders, especially for businesses, landscapers, or customers purchasing multiple plants. Contact us directly to discuss pricing for orders of 10 or more plants.'
  },
  {
    id: 'payment',
    question: 'What payment methods do you accept?',
    answer: 'We accept cash, all major credit cards (Visa, MasterCard, American Express, Discover), and debit cards. We also offer store credit and gift cards for your convenience.'
  }
]

export const FAQPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Page Header */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our plants, services, and policies
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq) => (
              <AccordionItem 
                key={faq.id} 
                value={faq.id}
                className="border border-gray-200 rounded-lg px-6 bg-white shadow-sm"
              >
                <AccordionTrigger className="text-left text-lg font-medium text-gray-900 hover:no-underline hover:text-green-600">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-16 bg-green-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Card className="bg-white shadow-sm">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Still Have Questions?
              </h2>
              <p className="text-gray-600 mb-6">
                Our knowledgeable staff is here to help you succeed with your plants. Don't hesitate to reach out!
              </p>
              <div className="flex items-center justify-center space-x-2 text-green-600">
                <Phone className="h-5 w-5" />
                <span className="text-lg font-semibold">(555) 123-4567</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
} 