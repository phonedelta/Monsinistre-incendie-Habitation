import { useEffect, useMemo, useState } from 'react'
import {
  documentsOptions,
  finalDecisionOptions,
  problemOptions,
  propertyOptions,
  yesNo,
  yesNoUnknown,
} from '../data/landingContent'
import AnimatedSection from './AnimatedSection'
import CTAButton from './CTAButton'
import FormOption from './FormOption'
import FormProgress from './FormProgress'
import SectionHeader from './SectionHeader'

const TOTAL_STEPS = 10

const initialForm = {
  property: '',
  insured: '',
  fireDate: '',
  declared: '',
  dossierOpen: '',
  finalDecision: '',
  firstEvaluation: '',
  problem: '',
  documents: '',
  fullName: '',
  city: '',
  phone: '',
  leadPriority: '',
}

function isValidPhone(value) {
  const cleaned = value.replace(/[\s.\-()]/g, '')
  return /^(?:\+?\d{8,15}|0\d{9})$/.test(cleaned)
}

function isValidDate(value) {
  if (!value) return false
  const date = new Date(value)
  if (Number.isNaN(date.getTime())) return false
  const today = new Date()
  today.setHours(23, 59, 59, 999)
  return date <= today
}

function FieldLabel({ htmlFor, children, required }) {
  return (
    <label htmlFor={htmlFor} className="mb-3 block text-sm font-semibold text-charcoal">
      {children}
      {required ? (
        <span className="ml-1 text-copper" aria-hidden="true">
          *
        </span>
      ) : null}
    </label>
  )
}

function TextInput({ id, error, ...props }) {
  return (
    <input
      id={id}
      className={`w-full min-w-0 rounded-xl border bg-ivory/60 px-3.5 py-3.5 text-[15px] text-charcoal outline-none transition-all duration-200 placeholder:text-muted-warm/55 hover:border-copper/25 focus:border-copper focus:bg-white focus:ring-4 focus:ring-copper/10 sm:px-4 ${
        error ? 'border-red-600' : 'border-line'
      }`}
      {...props}
    />
  )
}

export default function QualificationForm() {
  const [step, setStep] = useState(1)
  const [form, setForm] = useState(initialForm)
  const [error, setError] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [animKey, setAnimKey] = useState(0)
  const [stepDirection, setStepDirection] = useState('forward')

  const setField = (key, value) => {
    setForm((prev) => {
      const next = { ...prev, [key]: value }
      if (key === 'finalDecision') {
        next.leadPriority = value === 'Non' ? 'priority' : ''
      }
      return next
    })
    setError('')
  }

  useEffect(() => {
    setAnimKey((prev) => prev + 1)
  }, [step])

  const stepTitle = useMemo(() => {
    const titles = {
      1: 'Quel bien a subi l’incendie ?',
      2: 'Le logement était-il assuré au moment de l’incendie ?',
      3: 'Quand l’incendie a-t-il eu lieu ?',
      4: 'Avez-vous déjà déclaré le sinistre à votre assurance ?',
      5: 'Votre dossier est-il toujours en cours ?',
      6: 'Avez-vous reçu une décision définitive de votre compagnie d’assurance ?',
      7: 'Une première évaluation des dommages a-t-elle déjà été réalisée ?',
      8: 'Quel est aujourd’hui votre principal problème ?',
      9: 'Avez-vous des documents concernant le sinistre ?',
      10: 'Vos coordonnées',
    }
    return titles[step]
  }, [step])

  const validateStep = () => {
    switch (step) {
      case 1:
        if (!form.property) return 'Veuillez sélectionner un type de bien.'
        return ''
      case 2:
        if (!form.insured) return 'Veuillez indiquer si le logement était assuré.'
        return ''
      case 3:
        if (!form.fireDate) return 'Veuillez indiquer la date de l’incendie.'
        if (!isValidDate(form.fireDate)) return 'Veuillez saisir une date valide.'
        return ''
      case 4:
        if (!form.declared) return 'Veuillez indiquer si le sinistre a été déclaré.'
        return ''
      case 5:
        if (!form.dossierOpen) return 'Veuillez indiquer si votre dossier est toujours en cours.'
        return ''
      case 6:
        if (!form.finalDecision) return 'Veuillez indiquer si une décision définitive a été reçue.'
        return ''
      case 7:
        return ''
      case 8:
        if (!form.problem) return 'Veuillez sélectionner votre principal problème.'
        return ''
      case 9:
        return ''
      case 10:
        if (!form.fullName.trim()) return 'Veuillez renseigner votre nom et prénom.'
        if (!form.city.trim()) return 'Veuillez renseigner votre ville.'
        if (!form.phone.trim()) return 'Veuillez renseigner votre téléphone.'
        if (!isValidPhone(form.phone)) return 'Veuillez saisir un numéro de téléphone valide.'
        return ''
      default:
        return ''
    }
  }

  const goNext = () => {
    const message = validateStep()
    if (message) {
      setError(message)
      return
    }
    setError('')
    setStepDirection('forward')
    setStep((prev) => Math.min(prev + 1, TOTAL_STEPS))
  }

  const goBack = () => {
    setError('')
    setStepDirection('back')
    setStep((prev) => Math.max(prev - 1, 1))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const message = validateStep()
    if (message) {
      setError(message)
      return
    }

    const payload = {
      ...form,
      leadPriority: form.finalDecision === 'Non' ? 'priority' : form.leadPriority,
    }

    // Données prêtes pour intégration backend / CRM
    console.info('Qualification dossier incendie habitation', payload)
    setSubmitted(true)
  }

  const selectAndAdvance = (key, value) => {
    setField(key, value)
  }

  const renderOptions = (options, key, name) => (
    <div className={`grid gap-3 ${options.length > 4 ? 'sm:grid-cols-1' : 'sm:grid-cols-2'}`}>
      {options.map((option) => (
        <FormOption
          key={option}
          name={name}
          value={option}
          label={option}
          checked={form[key] === option}
          onChange={() => selectAndAdvance(key, option)}
        />
      ))}
    </div>
  )

  return (
    <section id="dossier-form" className="section-pad section-anchor bg-mist">
      <div className="page-container max-w-3xl">
        <AnimatedSection>
          <SectionHeader
            title="Votre dossier incendie peut-il être pris en charge ?"
            subtitle="Répondez à quelques questions. Elles nous permettront d’identifier rapidement votre situation"
          />
        </AnimatedSection>

        <AnimatedSection delay={100} className="mt-8 sm:mt-10">
          {submitted ? (
            <div
              className="success-enter rounded-[1.75rem] border border-copper/20 bg-surface p-8 text-center shadow-[0_18px_50px_-34px_rgba(28,25,23,0.35)]"
              role="status"
            >
              <p className="font-display text-2xl font-extrabold text-charcoal">
                Dossier envoyé pour analyse
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="rounded-[1.75rem] border border-line bg-surface p-5 shadow-[0_18px_50px_-34px_rgba(28,25,23,0.35)] transition-shadow duration-300 hover:shadow-[0_22px_56px_-34px_rgba(28,25,23,0.4)] sm:p-8"
              noValidate
            >
              <FormProgress current={step} total={TOTAL_STEPS} />

              <div
                key={animKey}
                className={stepDirection === 'back' ? 'step-enter-back' : 'step-enter-forward'}
              >
                <fieldset>
                  <legend className="font-display mb-5 text-lg font-extrabold tracking-tight text-charcoal sm:text-xl">
                    {stepTitle}
                    {[1, 2, 3, 4, 5, 6, 8].includes(step) ? (
                      <span className="ml-1 text-copper" aria-hidden="true">
                        *
                      </span>
                    ) : null}
                  </legend>

                  {step === 1 ? renderOptions(propertyOptions, 'property', 'property') : null}

                  {step === 2 ? (
                    <div className="space-y-4">
                      {renderOptions(yesNoUnknown, 'insured', 'insured')}
                      {form.insured === 'Non' ? (
                        <p
                          className="step-enter-forward rounded-2xl border border-copper/20 bg-ember-soft/70 px-4 py-3 text-sm leading-relaxed text-slate-warm"
                          role="status"
                        >
                          Cette prestation concerne prioritairement les dossiers assurés.
                        </p>
                      ) : null}
                    </div>
                  ) : null}

                  {step === 3 ? (
                    <div>
                      <FieldLabel htmlFor="fireDate" required>
                        Date de l’incendie
                      </FieldLabel>
                      <TextInput
                        id="fireDate"
                        type="date"
                        required
                        value={form.fireDate}
                        max={new Date().toISOString().split('T')[0]}
                        onChange={(e) => setField('fireDate', e.target.value)}
                        error={Boolean(error)}
                        aria-invalid={Boolean(error)}
                      />
                    </div>
                  ) : null}

                  {step === 4 ? renderOptions(yesNo, 'declared', 'declared') : null}
                  {step === 5 ? renderOptions(yesNoUnknown, 'dossierOpen', 'dossierOpen') : null}
                  {step === 6 ? renderOptions(finalDecisionOptions, 'finalDecision', 'finalDecision') : null}
                  {step === 7 ? renderOptions(yesNo, 'firstEvaluation', 'firstEvaluation') : null}
                  {step === 8 ? renderOptions(problemOptions, 'problem', 'problem') : null}
                  {step === 9 ? renderOptions(documentsOptions, 'documents', 'documents') : null}

                  {step === 10 ? (
                    <div className="space-y-5">
                      <div>
                        <FieldLabel htmlFor="fullName" required>
                          Nom et prénom
                        </FieldLabel>
                        <TextInput
                          id="fullName"
                          type="text"
                          autoComplete="name"
                          required
                          value={form.fullName}
                          onChange={(e) => setField('fullName', e.target.value)}
                          error={Boolean(error) && !form.fullName.trim()}
                        />
                      </div>
                      <div>
                        <FieldLabel htmlFor="city" required>
                          Ville
                        </FieldLabel>
                        <TextInput
                          id="city"
                          type="text"
                          autoComplete="address-level2"
                          required
                          value={form.city}
                          onChange={(e) => setField('city', e.target.value)}
                          error={Boolean(error) && !form.city.trim()}
                        />
                      </div>
                      <div>
                        <FieldLabel htmlFor="phone" required>
                          Téléphone / WhatsApp
                        </FieldLabel>
                        <TextInput
                          id="phone"
                          type="tel"
                          autoComplete="tel"
                          inputMode="tel"
                          required
                          value={form.phone}
                          onChange={(e) => setField('phone', e.target.value)}
                          error={Boolean(error) && (!form.phone.trim() || !isValidPhone(form.phone))}
                          aria-describedby={error ? 'form-error' : undefined}
                        />
                      </div>
                    </div>
                  ) : null}
                </fieldset>
              </div>

              {error ? (
                <p id="form-error" className="mt-4 text-sm font-medium text-red-700" role="alert">
                  {error}
                </p>
              ) : null}

              <div className="mt-7 flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={goBack}
                    className="nav-btn inline-flex min-h-11 items-center justify-center rounded-xl border border-line bg-white px-4 py-2.5 text-sm font-semibold text-charcoal hover:border-copper/25 hover:bg-beige/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper focus-visible:ring-offset-2"
                  >
                    Retour
                  </button>
                ) : (
                  <span className="hidden sm:block" />
                )}

                {step < TOTAL_STEPS ? (
                  <button
                    type="button"
                    onClick={goNext}
                    className="nav-btn inline-flex min-h-11 w-full items-center justify-center rounded-xl bg-charcoal px-5 py-2.5 text-sm font-semibold text-white hover:bg-slate-warm hover:shadow-[0_10px_24px_-14px_rgba(28,25,23,0.45)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper focus-visible:ring-offset-2 sm:w-auto"
                  >
                    Continuer
                  </button>
                ) : (
                  <CTAButton type="submit" size="md" className="w-full sm:w-auto">
                    Faire examiner mon dossier
                  </CTAButton>
                )}
              </div>
            </form>
          )}
        </AnimatedSection>
      </div>
    </section>
  )
}
