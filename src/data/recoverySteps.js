const COMMON_STEPS = [
  'Open the reset link and enter the email, phone, or username tied to your account.',
  'Check your inbox and spam folder for the reset email or code.',
  'Create a new unique password with at least 12 characters.',
  'Sign out of old sessions and review account activity after login.',
]

const SITE_SPECIFIC_STEPS = {
  google: [
    'If recovery fails, use the account recovery form and provide last known password details.',
    'Review recovery phone and backup email after signing in.',
  ],
  microsoft: [
    'Use recovery email/phone verification when prompted by Microsoft.',
    'Recheck security info on your Microsoft Security dashboard.',
  ],
  facebook: [
    'Try both email and phone options in Find Your Account.',
    'If needed, follow identity confirmation prompts to regain access.',
  ],
  instagram: [
    'Use your username if your email reset does not arrive.',
    'Check SMS recovery option from the same reset screen.',
  ],
  github: [
    'After reset, review authorized OAuth apps and active sessions.',
    'Regenerate personal access tokens if account compromise is suspected.',
  ],
  netflix: [
    'Use the login help flow to reset through email or SMS.',
    'Confirm your billing profile after account access is restored.',
  ],
}

export function getRecoverySteps(site) {
  const specific = SITE_SPECIFIC_STEPS[site.id] || [
    'If no reset email arrives within 10 minutes, retry and verify account identifier spelling.',
    'If still blocked, contact official support using the provider help center.',
  ]

  return [...COMMON_STEPS, ...specific]
}
