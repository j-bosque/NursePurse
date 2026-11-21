/* NursePurse question bank
   Format: Q(topicId, question, [CORRECT answer, wrong, wrong, wrong], explanation)
   The correct answer is always listed first here; the app shuffles the order. */

const MODULES = {
  5: { name: 'Acid–Base Balance', code: 'MDC2 · Module 5' },
  6: { name: 'Upper GI & Nutrition', code: 'MDC2 · Module 6' },
  7: { name: 'Endocrine, Reproductive & Urinary Meds', code: 'NUR2474 · Module 7' }
};

const TOPICS = [
  { id: 'abg',     mod: 5, name: 'ABG Interpretation',        tag: 'pH' },
  { id: 'ab',      mod: 5, name: 'Acid–Base Imbalances',      tag: 'H⁺' },
  { id: 'vent',    mod: 5, name: 'Ventilation, DKA & K⁺',     tag: 'K⁺' },
  { id: 'mouth',   mod: 6, name: 'Mouth & Esophagus',         tag: 'Or' },
  { id: 'stomach', mod: 6, name: 'Ulcers, Gastritis & GI Bleed', tag: 'GI' },
  { id: 'gerd',    mod: 6, name: 'GERD, B12 & Dumping',       tag: 'B12' },
  { id: 'tube',    mod: 6, name: 'Enteral & Parenteral Nutrition', tag: 'NG' },
  { id: 'pit',     mod: 7, name: 'Pituitary & Adrenal',       tag: 'ADH' },
  { id: 'thy',     mod: 7, name: 'Thyroid & Calcium',         tag: 'TSH' },
  { id: 'dm',      mod: 7, name: 'Insulin & Diabetes Meds',   tag: 'BG' },
  { id: 'repro',   mod: 7, name: 'Reproductive Meds',         tag: 'Rx' },
  { id: 'uri',     mod: 7, name: 'Urinary & Bladder Meds',    tag: 'UA' }
];

const BANK = [];
function Q(t, q, o, e) { BANK.push({ id: t + '-' + BANK.length, t, q, o, e }); }

/* ---------------- MODULE 5 · ABG INTERPRETATION ---------------- */
Q('abg', 'What is the normal range for arterial pH?',
  ['7.35 – 7.45', '7.25 – 7.35', '7.40 – 7.50', '7.30 – 7.50'],
  'Below 7.35 is acidemia; above 7.45 is alkalemia. Always look at pH first: it sets the direction.');
Q('abg', 'What is the normal range for PaCO₂, and which organ controls it?',
  ['35 – 45 mm Hg, controlled by the lungs', '22 – 26 mm Hg, controlled by the kidneys', '35 – 45 mEq/L, controlled by the kidneys', '80 – 100 mm Hg, controlled by the lungs'],
  'PaCO₂ is the "respiratory acid." Breathing faster blows it off; breathing slower holds it in.');
Q('abg', 'What is the normal range for HCO₃⁻ (bicarbonate), and which organ controls it?',
  ['22 – 26 mEq/L, controlled by the kidneys', '35 – 45 mEq/L, controlled by the lungs', '22 – 26 mm Hg, controlled by the lungs', '7.35 – 7.45, controlled by the liver'],
  'HCO₃⁻ is the "metabolic base." The kidneys hold on to it or let it go.');
Q('abg', 'In the ROME memory cue, what does "Metabolic = Equal" mean?',
  ['pH and HCO₃⁻ move in the same direction', 'pH and PaCO₂ move in the same direction', 'PaCO₂ and HCO₃⁻ are always equal', 'Metabolic problems always have a normal pH'],
  'ROME: Respiratory = Opposite (pH vs PaCO₂), Metabolic = Equal (pH and HCO₃⁻ go the same way).');
Q('abg', 'What is the FIRST step when reading an ABG?',
  ['Look at the pH to decide acidosis or alkalosis', 'Look at the PaO₂', 'Decide whether it is compensated', 'Calculate the anion gap'],
  'pH sets the direction. Then find which value (PaCO₂ or HCO₃⁻) explains it, then check compensation, then go back to the client.');
Q('abg', 'An ABG is "fully compensated" when:',
  ['pH is normal but PaCO₂ and HCO₃⁻ are both abnormal', 'All three values are abnormal', 'pH is abnormal and only one other value is abnormal', 'All three values are normal'],
  'Uncompensated: one of PaCO₂/HCO₃⁻ abnormal. Partial: all three abnormal. Full: pH back in range, both others abnormal.');
Q('abg', 'An ABG is "partially compensated" when:',
  ['pH, PaCO₂ and HCO₃⁻ are ALL outside normal range', 'Only the pH is abnormal', 'pH is normal and both others are abnormal', 'Only PaCO₂ is abnormal'],
  'The other system is trying to help (so it is abnormal too), but the pH has not made it back into range yet.');
Q('abg', 'pH 7.37, PaCO₂ 32, HCO₃⁻ 19. Interpret.',
  ['Fully compensated metabolic acidosis', 'Fully compensated respiratory alkalosis', 'Uncompensated metabolic acidosis', 'Normal ABG'],
  'pH is normal but on the acidic side (below 7.40). HCO₃⁻ is low = metabolic acidosis. Low PaCO₂ is the lungs compensating.');
Q('abg', 'pH 7.10, PaCO₂ 44, HCO₃⁻ 14. Interpret.',
  ['Uncompensated metabolic acidosis', 'Partially compensated metabolic acidosis', 'Uncompensated respiratory acidosis', 'Fully compensated metabolic acidosis'],
  'Low pH + low HCO₃⁻ = metabolic acidosis. PaCO₂ is still normal, so the lungs have not started helping: uncompensated.');
Q('abg', 'pH 7.52, PaCO₂ 20, HCO₃⁻ 16. Interpret.',
  ['Partially compensated respiratory alkalosis', 'Uncompensated respiratory alkalosis', 'Partially compensated metabolic acidosis', 'Fully compensated respiratory alkalosis'],
  'High pH + low PaCO₂ (opposite) = respiratory alkalosis. HCO₃⁻ is low too (kidneys compensating), and pH is still high: partial.');
Q('abg', 'pH 7.25, PaCO₂ 47, HCO₃⁻ 25. Interpret.',
  ['Uncompensated respiratory acidosis', 'Partially compensated respiratory acidosis', 'Uncompensated metabolic acidosis', 'Fully compensated respiratory acidosis'],
  'Low pH + high PaCO₂ = respiratory acidosis. HCO₃⁻ is normal, so the kidneys have not compensated yet.');
Q('abg', 'pH 7.60, PaCO₂ 55, HCO₃⁻ 36. Interpret.',
  ['Partially compensated metabolic alkalosis', 'Uncompensated metabolic alkalosis', 'Partially compensated respiratory acidosis', 'Fully compensated metabolic alkalosis'],
  'High pH + high HCO₃⁻ (same direction) = metabolic alkalosis. High PaCO₂ = lungs slowing breathing to compensate; pH still high = partial.');
Q('abg', 'pH 7.18, PaCO₂ 22, HCO₃⁻ 13. Interpret.',
  ['Partially compensated metabolic acidosis', 'Uncompensated metabolic acidosis', 'Partially compensated respiratory alkalosis', 'Uncompensated respiratory acidosis'],
  'Low pH + low HCO₃⁻ = metabolic acidosis. Low PaCO₂ shows the lungs blowing off acid (think Kussmaul breathing), but pH is still low.');
Q('abg', 'pH 7.68, PaCO₂ 34, HCO₃⁻ 25. Interpret.',
  ['Uncompensated respiratory alkalosis', 'Uncompensated metabolic alkalosis', 'Partially compensated respiratory alkalosis', 'Normal ABG'],
  'High pH + low PaCO₂ = respiratory alkalosis. HCO₃⁻ is normal = no compensation yet.');
Q('abg', 'An alert adult with kidney disease has pH 7.31, HCO₃⁻ 16, PaCO₂ 33. What is the pattern?',
  ['Metabolic acidosis with the lungs compensating (partially compensated)', 'Respiratory acidosis with the kidneys compensating', 'Fully compensated respiratory alkalosis', 'Uncompensated metabolic alkalosis'],
  'Kidneys are not clearing acid, so HCO₃⁻ drops. The lungs breathe off CO₂ to help, but pH is still below 7.35.');

/* ---------------- MODULE 5 · ACID–BASE IMBALANCES ---------------- */
Q('ab', 'A client has had an NG tube to suction for 3 days. Which imbalance is most likely?',
  ['Metabolic alkalosis', 'Metabolic acidosis', 'Respiratory acidosis', 'Respiratory alkalosis'],
  'Suction and vomiting remove stomach acid (H⁺ and Cl⁻). Lose acid and the base is left over, so HCO₃⁻ rises.');
Q('ab', 'Which condition causes metabolic acidosis?',
  ['Diabetic ketoacidosis (DKA)', 'Prolonged vomiting', 'Anxiety-related hyperventilation', 'Excess antacid use'],
  'DKA builds up ketone acids. Other causes: starvation, profuse diarrhea, kidney failure, lactic acid.');
Q('ab', 'A client received a large opioid dose and is breathing 6 times a minute. Which imbalance do you expect?',
  ['Respiratory acidosis', 'Respiratory alkalosis', 'Metabolic alkalosis', 'Metabolic acidosis'],
  'Slow breathing traps CO₂ (acid) in the body. Hypoventilation = respiratory acidosis.');
Q('ab', 'A client having a panic attack is breathing fast and reports tingling fingers. Which imbalance fits?',
  ['Respiratory alkalosis', 'Respiratory acidosis', 'Metabolic acidosis', 'Metabolic alkalosis'],
  'Fast breathing blows off too much CO₂. Numbness, tingling and tinnitus are classic. Calming techniques and treating the cause help.');
Q('ab', 'Profuse watery diarrhea most often causes which imbalance?',
  ['Metabolic acidosis (loss of bicarbonate)', 'Metabolic alkalosis (loss of acid)', 'Respiratory alkalosis', 'Respiratory acidosis'],
  'The lower gut is rich in bicarbonate. Losing base leaves the body acidic. Compare: vomiting loses acid (alkalosis).');
Q('ab', 'Deep, rapid Kussmaul respirations in DKA are the body\'s way of:',
  ['Blowing off CO₂ to compensate for metabolic acidosis', 'Retaining CO₂ to compensate for alkalosis', 'Increasing oxygen to the brain', 'Getting rid of excess glucose'],
  'The lungs compensate for metabolic problems. Breathing off CO₂ (acid) pushes pH back up.');
Q('ab', 'Which equation is the preferred way to calculate the anion gap?',
  ['Na⁺ − (Cl⁻ + HCO₃⁻)', 'Na⁺ + Cl⁻ − HCO₃⁻', 'K⁺ − (Na⁺ + Cl⁻)', '(Na⁺ + HCO₃⁻) − Cl⁻'],
  'Normal is about 8–12 with this equation (12–16 if you add K⁺). A high gap means extra unmeasured acid.');
Q('ab', 'Na⁺ 140, Cl⁻ 100, HCO₃⁻ 14. What is the anion gap and what does it suggest?',
  ['26: high anion gap metabolic acidosis', '26: normal anion gap', '54: metabolic alkalosis', '12: normal anion gap metabolic acidosis'],
  '140 − (100 + 14) = 26. Above 12 means added acid, such as DKA, lactic acidosis, salicylates or end-stage renal disease.');
Q('ab', 'Which cause produces a HIGH anion gap metabolic acidosis?',
  ['Lactic acidosis from sepsis', 'Diarrhea', 'Excess 0.9% saline', 'Early renal disease'],
  'High gap = acid added (lactic acid, ketones, salicylates, toxic alcohols, ESRD). Normal gap = bicarb lost (diarrhea, chloride-heavy fluids).');
Q('ab', 'Why must the nurse be careful giving high-flow oxygen to a client with end-stage COPD?',
  ['Chronic CO₂ retainers may rely on low oxygen to drive breathing, so too much O₂ can slow breathing and worsen CO₂ retention', 'Oxygen causes metabolic alkalosis', 'Oxygen lowers potassium', 'COPD clients cannot absorb oxygen'],
  'Titrate oxygen to the prescribed target and watch breathing rate, depth and alertness, not just SpO₂.');
Q('ab', 'Which statement about compensation is correct?',
  ['The lungs compensate for metabolic problems; the kidneys compensate for respiratory problems', 'The kidneys compensate for metabolic problems', 'The lungs compensate for respiratory problems', 'Only the kidneys can compensate'],
  'Think of two teammates: when one system fumbles, the OTHER one covers. Lungs act fast (minutes); kidneys are slow (hours to days).');
Q('ab', 'While correcting metabolic acidosis, why should the client be on cardiac monitoring?',
  ['Potassium shifts back into cells and can drop (hypokalemia), causing dysrhythmias', 'Sodium rises rapidly', 'Calcium shifts out of bone', 'Oxygen levels drop'],
  'In acidosis, K⁺ moves out of cells. As the acid is corrected, K⁺ moves back in, so serum K⁺ can fall fast.');
Q('ab', 'Which finding is expected with metabolic alkalosis?',
  ['Tetany, muscle weakness and hyperreflexia with low K⁺ and Ca²⁺', 'Warm, dry, pink skin and Kussmaul breathing', 'Hyperkalemia and bradycardia', 'Very high PaCO₂ with normal HCO₃⁻'],
  'Alkalosis lowers ionized calcium and potassium, so nerves and muscles get "twitchy." Watch for weak respiratory muscles too.');
Q('ab', 'Which of these is a cause of metabolic alkalosis?',
  ['Overuse of antacids', 'Starvation', 'Aspirin toxicity', 'Kidney failure'],
  'Too much base in (antacids, bicarb, TPN, transfusions) or acid out (vomiting, suction, diuretics) = metabolic alkalosis.');

/* ---------------- MODULE 5 · VENTILATION, DKA & K⁺ ---------------- */
Q('vent', 'A client on oxygen is unresponsive with RR 4/min. SpO₂ reads 97%. What is the priority?',
  ['Open the airway, give assisted breaths and call for emergency help', 'Document the reassuring SpO₂ and recheck in 15 minutes', 'Give a rescue bronchodilator', 'Increase the oxygen flow and wait for the saturation to change'],
  'SpO₂ shows oxygenation, not ventilation. CO₂ is building up. Never wait for the saturation to fall.');
Q('vent', 'Which statement about SpO₂ is correct?',
  ['It describes oxygenation; it does not prove CO₂ is being removed', 'A normal SpO₂ proves ventilation is adequate', 'It measures PaCO₂', 'It is the best way to judge breathing effort'],
  'Like a fuel gauge that shows the tank is full while the exhaust pipe is blocked. Judge ventilation by depth, effort, alertness and PaCO₂.');
Q('vent', 'An alert client is wheezing and speaking in short phrases. They have an active rescue bronchodilator order. Best action?',
  ['Give the rescue bronchodilator, then reassess speech, effort and air movement', 'Begin assisted breaths', 'Wait until SpO₂ drops below 90%', 'Call a rapid response before any action'],
  'Narrowed airways (but still breathing on their own) respond to the bronchodilator. Then reassess how many words they can say.');
Q('vent', 'When insulin is started for DKA, what happens to potassium?',
  ['It moves into the cells, so serum K⁺ can fall quickly', 'It moves out of cells, so serum K⁺ rises', 'It is unchanged', 'It is lost in the stool'],
  'Insulin acts like a key that opens the cell door for glucose AND potassium. Serum K⁺ drops and the heart rhythm is at risk.');
Q('vent', 'A client in DKA has K⁺ 3.1 mmol/L before the first insulin dose. What should the nurse do?',
  ['Hold insulin per protocol, get prescriber direction and replace K⁺; start insulin once K⁺ is above 3.5', 'Give insulin right away because glucose is the priority', 'Give double the insulin dose', 'Give oral potassium and start insulin at the same time without notifying anyone'],
  'Under the adult pathway, K⁺ below 3.5 delays insulin. Put the client on cardiac monitoring as well.');
Q('vent', 'Why can total-body potassium be low in DKA even when the first serum K⁺ is normal or high?',
  ['K⁺ shifts out of cells in acidosis and is lost in the urine, hiding the deficit', 'The lab is always wrong in DKA', 'DKA causes potassium to be stored in bone', 'Insulin raises potassium'],
  'One number can fool you. Trend the potassium during treatment.');
Q('vent', 'In DKA, glucose is falling nicely, but potassium is also falling. What is true?',
  ['Better glucose does NOT clear a low potassium safety concern', 'Falling glucose means the client is recovered', 'Potassium will correct itself once glucose is normal', 'Stop all monitoring once glucose is under 250'],
  'Glucose ≠ potassium safety. DKA recovery is judged by ketones, pH/HCO₃⁻, circulation and clinical response.');
Q('vent', 'A client on gastric suction says "My nausea is better," but drainage is still high and urine output is falling. Best action?',
  ['Quantify the losses, assess perfusion and report the trend', 'Document that the problem has resolved', 'Remove the NG tube', 'Encourage the client to drink more water and recheck tomorrow'],
  'Comfort ≠ the source has stopped. Ongoing losses mean fluid, potassium and acid are still leaving.');
Q('vent', 'Which statement is correct about compensation?',
  ['A pH moving toward normal does not mean the cause is fixed', 'A normal pH always means recovery', 'Compensation means the problem is resolved', 'Compensation only happens in respiratory problems'],
  'Compensation ≠ recovery. The cause can still be there even when the pH looks better.');
Q('vent', 'Which finding is a red flag in ANY acid–base problem?',
  ['Falling blood pressure with a rising pulse', 'Mild thirst', 'A pH of 7.40', 'Urine output of 60 mL/hr'],
  'Other red flags: slow or shallow breathing, new confusion, falling urine output, K⁺ falling on insulin, rising oxygen need.');
Q('vent', 'How should the nurse judge whether ventilation is effective?',
  ['Breathing depth, effort, alertness, speech and the PaCO₂ trend', 'SpO₂ alone', 'Heart rate alone', 'Skin color alone'],
  'Ineffective ventilation leads to CO₂ retention and respiratory acidosis even with a good SpO₂.');

/* ---------------- MODULE 6 · MOUTH & ESOPHAGUS ---------------- */
Q('mouth', 'How does oral candidiasis (thrush) usually look, and how is it treated?',
  ['White plaques that usually scrape off; treated with nystatin', 'Red velvety patches; treated with surgery', 'Painless hard ulcer; treated with lidocaine', 'Black spots; treated with antibiotics'],
  'Thrush is a secondary stomatitis (overgrowth). Scrape the tongue to see if the white plaque comes off.');
Q('mouth', 'Which client is at HIGHEST risk for secondary stomatitis?',
  ['A client with a low WBC count after chemotherapy', 'A healthy adult with a canker sore', 'A client with high blood pressure', 'A client who just had knee surgery'],
  'Low WBCs or a weakened immune system lets bacteria and yeast overgrow.');
Q('mouth', 'Which instruction belongs in teaching for a client with stomatitis?',
  ['Use a soft-bristled toothbrush and avoid alcohol-based mouthwash', 'Use a firm toothbrush to remove plaques', 'Choose spicy foods to boost appetite', 'Rinse with alcohol mouthwash after meals'],
  'Also: soft bland diet, saline or baking-soda rinses, foods high in vitamin C and protein.');
Q('mouth', 'After a lidocaine mouth rinse, what is the main safety concern?',
  ['Aspiration and burns, because the gag reflex is numbed', 'Hyperglycemia', 'Bleeding gums', 'Hypertension'],
  'Teach the client to be careful drinking right after, especially hot liquids.');
Q('mouth', 'What is the correct baking-soda rinse for stomatitis?',
  ['½ – 1 tsp baking soda in 8 oz warm water', '2 tbsp baking soda in 4 oz cold water', '1 tsp baking soda in alcohol mouthwash', '1 cup baking soda in 1 L water'],
  'Warm water or saline with baking soda soothes the mucosa.');
Q('mouth', 'Which oral lesion is a precancerous red, velvety patch?',
  ['Erythroplakia', 'Leukoplakia', 'Thrush', 'Canker sore'],
  'Erythro = red. Leukoplakia is white, thick and usually benign (tobacco raises risk).');
Q('mouth', 'Which pair is the biggest risk factor for oral cancer?',
  ['Tobacco plus alcohol', 'Coffee plus tea', 'Dairy plus sugar', 'Exercise plus stress'],
  'HPV and prior head/neck cancer also raise risk. Early stages often have no symptoms.');
Q('mouth', 'After oral or neck cancer surgery, the nurse hears stridor. What does this suggest?',
  ['Airway obstruction: an emergency', 'Expected post-op finding', 'Aspiration only', 'Pain that needs medication'],
  'Airway first after any head or neck surgery. Wheezing may mean aspiration; stridor may mean obstruction.');
Q('mouth', 'Before surgery that may remove the larynx, what should the nurse confirm?',
  ['The client can communicate in writing or with a board or device', 'The client has eaten a large meal', 'The client has stopped all fluids for 48 hours', 'The client has removed their dentures for good'],
  'Speech may be impaired after surgery. Set up pen and paper, a communication board or an electronic device first.');
Q('mouth', 'Which position is best after a radical neck dissection?',
  ['Fowler\'s position', 'Flat supine', 'Trendelenburg', 'Prone'],
  'Fowler\'s helps breathing, drainage and swallowing, and lowers aspiration risk.');
Q('mouth', 'Which teaching is correct for a client with a hiatal hernia?',
  ['Do not recline for 1 hour after eating; raise the head of the bed on 4–8 inch blocks', 'Eat 2 large meals a day', 'Lie flat after meals to aid digestion', 'Drink carbonated drinks to relieve bloating'],
  'Also: small, frequent meals that pass easily. Severe cases may need laparoscopic repair.');
Q('mouth', 'After a laparoscopic hiatal hernia repair, "gas bloat syndrome" means:',
  ['Difficulty belching to relieve distention', 'Excess flatus from the incision', 'Air in the chest cavity', 'Bloating caused by tube feeding'],
  'Other complications: temporary dysphagia, atelectasis or pneumonia, and an obstructed NG tube.');
Q('mouth', 'What is a hallmark cue of an esophageal tumor?',
  ['Persistent, progressive dysphagia', 'Sudden severe chest pain at rest', 'Increased appetite', 'Bright red rectal bleeding'],
  'Also chronic hiccups, painful swallowing, hoarseness and weight loss. Diagnosed by EGD with biopsy.');
Q('mouth', 'Xerostomia (dry mouth) raises the risk of:',
  ['Oral infection', 'Hypertension', 'Hypoglycemia', 'Kidney stones'],
  'It is common after head/neck radiation and with antidepressants, antihypertensives and diuretics.');

/* ---------------- MODULE 6 · ULCERS, GASTRITIS & GI BLEED ---------------- */
Q('stomach', 'What is the main cause of peptic ulcer disease?',
  ['H. pylori infection', 'Spicy food', 'Dairy products', 'Low stomach acid'],
  'NSAIDs and stress are other causes. Zollinger-Ellison (gastrin-secreting tumors) is a rare one.');
Q('stomach', 'Which pain pattern fits a DUODENAL ulcer?',
  ['Pain 2–3 hours after eating, may wake the client at night, relieved by eating', 'Pain right after eating that gets worse with food', 'Pain only with exercise', 'Constant pain unrelated to meals'],
  'Gastric = pain WORSE with eating. Duodenal = BETTER with eating. Timing helps the history but does not prove location.');
Q('stomach', 'A client with PUD reports sudden, severe abdominal pain radiating to the right shoulder. The abdomen is rigid and BP is falling. What is happening?',
  ['Possible perforation: a surgical emergency', 'Expected ulcer pain', 'GERD flare', 'Dumping syndrome'],
  'Sudden severe pain + rigid, board-like abdomen + falling BP = escalate now.');
Q('stomach', 'Black, tarry stool is called:',
  ['Melena', 'Hematochezia', 'Hematemesis', 'Steatorrhea'],
  'Melena comes from digested blood (upper GI). Hematochezia = bright red blood. Hematemesis = blood in vomit.');
Q('stomach', 'A client vomits coffee-ground material. What does this suggest?',
  ['An upper GI bleed', 'Normal digestion', 'A lower GI infection', 'Dehydration only'],
  'Check pulse, BP, dizziness and perfusion, and report. Coffee-ground = blood that has been partly digested by acid.');
Q('stomach', 'A client with a suspected ulcer takes a PRESCRIBED antiplatelet drug. What should the nurse do?',
  ['Report it to the prescriber; do not stop it on your own', 'Stop the antiplatelet immediately', 'Double the dose', 'Tell the client to switch to aspirin'],
  'Stopping antiplatelet therapy can be dangerous (clot risk). Let the prescriber decide.');
Q('stomach', 'A client with night-time epigastric pain has been taking an aspirin-containing headache product. Why does this matter?',
  ['Aspirin is an NSAID exposure that can injure the mucosa and raise bleeding risk', 'Aspirin cures ulcers', 'It does not matter because it is over the counter', 'Aspirin only affects the heart'],
  'Reconcile every prescription and OTC product. Then assess for bleeding (vomit, stool, pulse, BP).');
Q('stomach', 'When should a proton pump inhibitor (omeprazole, pantoprazole) be given?',
  ['30–60 minutes before meals', 'With the largest meal', 'At bedtime with a snack', 'Only when pain occurs'],
  'PPIs ("-zole" drugs) are first-line. They work best when taken before food turns on acid pumps.');
Q('stomach', 'How does sucralfate work, and when is it given?',
  ['Coats and protects the ulcer; give 1 hour before meals', 'Neutralizes acid; give with meals', 'Kills H. pylori; give at bedtime', 'Speeds gastric emptying; give after meals'],
  'Think of it as a bandage over the ulcer. Keep it 30 minutes apart from antacids.');
Q('stomach', 'A client taking bismuth subsalicylate reports dark stool. The nurse knows:',
  ['Bismuth can darken stool; still assess for other bleeding signs', 'This always means GI bleeding', 'The drug must be stopped right away', 'It is caused by low iron'],
  'Expected effect, but compare with pulse, BP, dizziness and Hgb to rule out a bleed.');
Q('stomach', 'How is H. pylori treated?',
  ['Antibiotics plus a PPI; finish the full course', 'A PPI alone for 3 days', 'Antacids only', 'Surgery'],
  'Antibiotics such as amoxicillin, clarithromycin, metronidazole or tetracycline are combined with a PPI.');
Q('stomach', 'Which client is at risk for a STRESS ulcer?',
  ['A client in the ICU with sepsis, burns, trauma or increased ICP', 'A healthy client with mild anxiety', 'A client with a hiatal hernia', 'A client on a clear liquid diet'],
  'Stress ulcers come from gastric ischemia. Prevent with an IV PPI; give IV push over 2 minutes.');
Q('stomach', 'Which IV fluid is used first for an upper GI bleed?',
  ['0.9% normal saline', 'D5W', '0.45% saline', '3% saline'],
  'Replace volume, monitor Hgb/Hct, check pulses and BP. EGD verifies and treats the bleed.');
Q('stomach', 'After an EGD, what must the nurse check before starting a diet?',
  ['LOC, gag reflex and ability to sip water', 'Bowel sounds only', 'Urine output only', 'Blood glucose only'],
  'The throat was numbed. Pain that worsens after EGD with abdominal or vital-sign changes is urgent.');
Q('stomach', 'What is the greatest risk factor for gastric cancer?',
  ['H. pylori', 'High-fiber diet', 'Regular exercise', 'Drinking water'],
  'Also pickled, smoked or salted foods, nitrates and low fruit/vegetable intake. Few symptoms until advanced.');
Q('stomach', 'Chronic gastritis can lead to which problem?',
  ['Vitamin B12 deficiency (pernicious anemia)', 'Vitamin C toxicity', 'Hypercalcemia', 'High iron levels'],
  'Atrophied parietal cells make less intrinsic factor, so B12 is not absorbed. It also raises gastric cancer risk.');
Q('stomach', 'For acute gastritis, what is the usual diet progression?',
  ['NPO for a few days, then ice chips, clear liquids, advance slowly', 'Regular diet right away', 'High-fat diet', 'Full liquids with citrus juice'],
  'Also replace fluids and electrolytes and limit tomato and citrus.');
Q('stomach', 'A client with gastric outlet obstruction is vomiting. What intervention is expected?',
  ['Insert an NG tube to decompress the stomach and verify placement', 'Give a large meal', 'Place the client flat', 'Give a laxative'],
  'Scarring near the pylorus blocks food. Elevate the head of the bed to prevent aspiration.');

/* ---------------- MODULE 6 · GERD, B12 & DUMPING ---------------- */
Q('gerd', 'How long should a client with GERD wait between the last meal and bedtime?',
  ['2–3 hours', '15 minutes', '1 hour is enough for everyone', '6 hours'],
  'One hour is not a universal interval. Adjust meal timing to the client\'s real schedule.');
Q('gerd', 'What is the gold standard test for diagnosing GERD?',
  ['24-hour ambulatory pH monitoring', 'Chest x-ray', 'CBC', 'Stool culture'],
  'Done with a transnasal catheter or wireless capsule. A PPI trial and history are also used.');
Q('gerd', 'What is a Nissen fundoplication?',
  ['Wrapping the gastric fundus around the lower esophageal sphincter area', 'Removing the stomach', 'Placing a feeding tube', 'Widening the pylorus'],
  'It tightens the "door" between the esophagus and stomach so acid does not flow back.');
Q('gerd', 'Which is a risk of long-term PPI use?',
  ['Hip fracture and C. diff infection', 'Hyperkalemia', 'Weight loss', 'Hypertension'],
  'PPIs may also reduce absorption of B12, iron, magnesium and calcium.');
Q('gerd', 'How should antacids be timed with other medicines?',
  ['1 hour before or 2 hours after other medicines', 'Always together with other medicines', 'Only at bedtime', '10 minutes after other medicines'],
  'Antacids can block absorption of other drugs.');
Q('gerd', 'Metoclopramide helps GERD by:',
  ['Speeding gastric emptying (short-term use)', 'Neutralizing acid', 'Coating the esophagus', 'Killing H. pylori'],
  'It is a prokinetic. Use it short-term only.');
Q('gerd', 'A client with GERD reports "water brash." This means:',
  ['Hypersalivation', 'Painful swallowing', 'Bloody vomit', 'Hoarse voice'],
  'Other cues: pyrosis (heartburn), regurgitation, dysphagia, night cough, dental caries.');
Q('gerd', 'Why can B12 run low in a client with autoimmune gastritis who eats plenty of meat?',
  ['Injured parietal cells make less intrinsic factor, so B12 is not absorbed', 'Meat contains no B12', 'The liver destroys B12', 'Stomach acid is too high'],
  'The problem is absorption, not intake. Like a delivery truck with no one to sign for the package.');
Q('gerd', 'Where is vitamin B12 absorbed?',
  ['Distal ileum', 'Stomach', 'Duodenum', 'Colon'],
  'Intrinsic factor from the stomach binds B12 so it can be absorbed in the distal ileum.');
Q('gerd', 'Which statement about gastritis and B12 is correct?',
  ['Not every gastritis causes B12 deficiency; risk follows the intrinsic-factor mechanism', 'Every gastritis means pernicious anemia', 'Gastritis raises B12 levels', 'B12 deficiency is only from poor diet'],
  'B12 risk follows parietal-cell and intrinsic-factor loss.');
Q('gerd', 'Which teaching fits a client with dumping syndrome?',
  ['Have drinks at least 30 minutes after meals, but keep the full-day fluid goal', 'Drink less fluid overall', 'Drink large amounts with every meal', 'Eat high-sugar foods for energy'],
  '"Move drink times," not "drink less." Smaller, more frequent meals and less simple sugar.');
Q('gerd', 'Which symptoms are typical of dumping syndrome?',
  ['Cramping, lightheadedness, sweating and diarrhea after meals', 'Constipation and hunger', 'Fever and rash', 'Chest pain at rest'],
  'Food and sugar hit the small intestine too fast after gastric surgery.');
Q('gerd', 'Why can a high-osmolality tube feeding cause dumping?',
  ['It draws water into the intestine, expanding the bowel', 'It contains too little sugar', 'It blocks the pylorus', 'It is absorbed too slowly'],
  'Normal body fluid is about 300 mOsm/kg. A concentrated formula pulls water in like a sponge in reverse.');
Q('gerd', 'Symptoms improved after dumping-syndrome teaching. What else should the nurse check?',
  ['The day\'s fluid total, weight and intake', 'Nothing; the plan worked', 'Only the blood pressure', 'Only the stool color'],
  'Persistent dizziness or vomiting still needs review.');

/* ---------------- MODULE 6 · ENTERAL & PARENTERAL NUTRITION ---------------- */
Q('tube', 'What head-of-bed elevation is required during tube feedings?',
  ['At least 30 degrees', 'Flat', '10 degrees', 'Trendelenburg'],
  'Tube-feeding safety = placement + HOB elevation. Aspiration is the major complication.');
Q('tube', 'What is the MOST common complication of enteral feeding?',
  ['A clogged tube', 'Pneumothorax', 'Hyperkalemia', 'Allergic reaction'],
  'Prevent clogs with water flushes.');
Q('tube', 'How often should a continuous tube feeding be flushed with 30 mL of water?',
  ['Every 4 hours', 'Once a day', 'Every 12 hours', 'Only when it clogs'],
  'Also flush before and after medicines, before and after intermittent feeds, and whenever feeding is stopped.');
Q('tube', 'Why is a gastrostomy preferred over an NG tube for support longer than 4–6 weeks?',
  ['The lower esophageal sphincter stays intact, so less reflux and aspiration', 'It is easier to insert', 'It does not need flushing', 'It cannot clog'],
  'Expected future need matters more than days already spent with a tube.');
Q('tube', 'How soon can a new PEG tube usually be used?',
  ['About 4 hours after placement', 'Immediately', 'After 2 weeks', 'After 90 days'],
  'The stoma tract matures in 30–90 days.');
Q('tube', 'Which client is the best candidate for CONTINUOUS rather than bolus feeding?',
  ['A critically ill client at high risk for aspiration', 'An alert client going home with a G-tube', 'A client who wants flexibility', 'A client taking oral meals'],
  'Continuous is also used for small-bowel feeds and clients at risk of intolerance.');
Q('tube', 'During a bolus feeding, the client says they feel full. What should the nurse do?',
  ['Slow the feeding or give smaller, more frequent volumes', 'Speed up to finish faster', 'Lay the client flat', 'Ignore it; fullness is expected'],
  'Lower the syringe to slow gravity flow. Bolus feeds are usually 200–400 mL over 15–60 minutes.');
Q('tube', 'According to current evidence, how is feeding tolerance best judged?',
  ['Nursing assessment: distention, discomfort, vomiting, bowel sounds, flatus, diarrhea', 'Gastric residual volume alone', 'Blood pressure alone', 'Patient weight once a month'],
  'A GRV of 250–500 mL was once used, but assessment is now the focus.');
Q('tube', 'A client on TPN has the infusion suddenly stop. What complication should the nurse watch for?',
  ['Hypoglycemia', 'Hypertension', 'Hyperkalemia', 'Bradycardia'],
  'TPN usually contains dextrose and insulin. Check blood glucose often.');
Q('tube', 'Which statement about TPN is correct?',
  ['It needs a central line and should not be infused with other medicines', 'It is given through an NG tube', 'It can be mixed with any IV drug', 'It has no infection risk'],
  'Central lines raise infection and clotting risk. Monitor electrolytes daily and fluid status.');
Q('tube', 'What should the nurse do with a continuous feeding when repositioning the client?',
  ['Pause the feeding', 'Increase the rate', 'Lower the head of the bed and keep it running', 'Disconnect and discard the formula'],
  'Pausing reduces aspiration risk. Hold feeding for a large residual or abdominal distention.');
Q('tube', 'A client needs nutrition support but has vomiting, distention and no flatus. What is best?',
  ['Keep intake restrictions and get clinical evaluation before enteral feeding', 'Start a full-strength bolus feed', 'Place a PEG today', 'Give oral supplements'],
  'Enteral feeding needs a usable GI tract.');
Q('tube', 'A client with dysphagia coughs and has a wet voice while drinking. SpO₂ was normal an hour ago. What does this mean?',
  ['Possible aspiration; protect the airway now', 'No concern because SpO₂ was normal', 'The client is dehydrated', 'Expected after any meal'],
  'A normal SpO₂ earlier does not cancel coughing or a wet voice now.');
Q('tube', 'Which finding suggests fluid OVERLOAD in a client receiving tube feedings?',
  ['Sudden weight gain and dependent or periorbital edema', 'Dry mucous membranes', 'Thirst', 'Low urine output with concentrated urine'],
  'Dry mucous membranes, thirst and low urine output point to dehydration instead. Track I&O and daily weights.');

/* ---------------- MODULE 7 · PITUITARY & ADRENAL ---------------- */
Q('pit', 'What is the most dangerous adverse effect of desmopressin?',
  ['Hyponatremia and water intoxication', 'Hyperkalemia', 'Dehydration', 'Hypertensive crisis'],
  'Desmopressin keeps water. Too much water dilutes sodium: headache, nausea, confusion, seizures. Teach fluid limits around doses.');
Q('pit', 'Which finding shows desmopressin is working as expected?',
  ['Fewer voids and more concentrated urine', 'Large amounts of dilute urine', 'Rising blood glucose', 'Weight loss of 2 kg'],
  'It replaces ADH (antidiuretic hormone), which tells the kidneys to keep water.');
Q('pit', 'Tolvaptan removes water through urine (aquaresis). What is its key danger?',
  ['Sodium rising too fast, which can cause neurologic damage', 'Sodium dropping too low', 'Severe hyperglycemia', 'Bradycardia'],
  'It is started in the hospital with frequent sodium checks, I&O, BP and liver tests.');
Q('pit', 'Naomi on tolvaptan: Na 122 → 130 in 5 hours, output far exceeds intake, dizzy on standing, BP 120/76 → 100/62. Top priorities?',
  ['Risk of neuro harm from a rapid sodium rise, and symptomatic volume loss: report now', 'Nothing; sodium is improving', 'Increase the tolvaptan dose', 'Restrict all fluids'],
  'The drug IS working, but too fast. Assist her when she stands.');
Q('pit', 'When should somatropin (growth hormone) be stopped?',
  ['When the epiphyseal growth plates close', 'After the first injection', 'When the child reaches age 5', 'When glucose is normal'],
  'Watch for hyperglycemia, headache (raised ICP) and hip or knee pain or limp. Rotate injection sites.');
Q('pit', 'Which adverse effect is associated with octreotide?',
  ['Gallstones', 'Hyperkalemia', 'Hair loss', 'Hearing loss'],
  'Octreotide suppresses GH. Also watch for nausea, diarrhea and glucose swings.');
Q('pit', 'Which teaching is correct for a client on long-term prednisone?',
  ['Take it in the morning with food and never stop suddenly', 'Take it at bedtime on an empty stomach', 'Stop it as soon as you feel better', 'Get live vaccines to boost immunity'],
  'Taper as ordered, avoid sick contacts and wear a medical ID.');
Q('pit', 'Which set of adverse effects fits long-term glucocorticoids?',
  ['Hyperglycemia, hidden infection, osteoporosis, low K⁺', 'Hypoglycemia, weight loss, high K⁺', 'Bradycardia, hair growth, constipation', 'Low BP, dehydration, hyperkalemia'],
  'Also fluid retention, high BP, GI ulcer, mood changes and slow wound healing.');
Q('pit', 'A client stopped months of prednisone without guidance. Now vomiting, dizzy, BP 88/54. What should the nurse think?',
  ['Adrenal crisis: the body cannot make enough cortisol; escalate urgently', 'Food poisoning', 'Expected withdrawal; give fluids and wait', 'Hypertensive crisis'],
  'Long-term steroids shut down the body\'s own cortisol. Assess vitals, LOC and perfusion; do not pick a restart dose yourself.');
Q('pit', 'Fludrocortisone is a mineralocorticoid. What does it do?',
  ['Keeps sodium and water, loses potassium', 'Loses sodium, keeps potassium', 'Lowers blood glucose', 'Blocks thyroid hormone'],
  'Monitor daily weight, BP, edema, lung sounds, K⁺ and I&O.');
Q('pit', 'On fludrocortisone: shoes feel tight, 2 kg gain over a few days, BP 118/70 → 154/88. Best action?',
  ['Assess and report the trend', 'This is expected; no action needed', 'Hold all fluids', 'Double the dose'],
  'An expected action can become an adverse effect. New dyspnea with edema = possible fluid overload.');
Q('pit', 'Glucocorticoids combined with NSAIDs increase the risk of:',
  ['GI ulcer and bleeding', 'Hypoglycemia', 'Hyperkalemia', 'Hearing loss'],
  'Also: steroids raise glucose (diabetes meds may need adjusting) and potassium-wasting diuretics deepen low K⁺.');
Q('pit', 'Negative feedback in the endocrine system works most like:',
  ['A thermostat: when hormone levels rise, the body makes less', 'A light switch that is always on', 'A one-way valve', 'A random number generator'],
  'When enough T3/T4 circulates, the body turns down TRH and TSH. Same idea for cortisol and GH.');

/* ---------------- MODULE 7 · THYROID & CALCIUM ---------------- */
Q('thy', 'How should levothyroxine be taken?',
  ['Same time daily, empty stomach, with water, 30–60 minutes before breakfast', 'With breakfast and a glass of milk', 'At bedtime with a snack', 'Only when feeling tired'],
  'It is lifelong therapy, so do not stop it.');
Q('thy', 'How far apart should levothyroxine be from calcium, iron or antacids?',
  ['At least 4 hours', '15 minutes', '1 hour', 'They can be taken together'],
  'These block absorption of the thyroid hormone.');
Q('thy', 'Which lab is the main one for checking levothyroxine dosing, and how long does it take to show the effect?',
  ['TSH; 4–6 weeks', 'T3; 1 day', 'Free calcium; 1 week', 'CBC; 2 days'],
  'High TSH = body wants more hormone (underdosed). Low TSH = too much (overdosed).');
Q('thy', 'A client on levothyroxine has a HIGH TSH. What does this suggest?',
  ['The dose may be too low (underdosed)', 'The dose is too high', 'The client has hyperthyroidism', 'The drug is working perfectly'],
  'The pituitary is "shouting" for more thyroid hormone.');
Q('thy', 'Which findings suggest TOO MUCH levothyroxine?',
  ['Palpitations, fast HR, heat intolerance, weight loss, insomnia', 'Fatigue, weight gain, cold intolerance', 'Constipation and dry skin', 'Bradycardia and depression'],
  'Too much = hyperthyroid signs. Start low and go slow in older adults and cardiac clients.');
Q('thy', 'A client on methimazole reports a sore throat and fever of 101.2°F. What is the concern?',
  ['Agranulocytosis (very low WBCs): report right away', 'A common cold; no action needed', 'The drug is working', 'Hypothyroidism'],
  'This is a "working but new red flag" case: the pulse improved, but infection risk is high.');
Q('thy', 'Which antithyroid drug is preferred in the 1st trimester of pregnancy?',
  ['PTU (propylthiouracil)', 'Methimazole', 'Levothyroxine', 'Cinacalcet'],
  'PTU carries a liver injury risk, so watch liver function.');
Q('thy', 'A client on warfarin starts levothyroxine. What should the nurse monitor?',
  ['INR and signs of bleeding', 'Blood glucose only', 'Potassium only', 'Urine color'],
  'Levothyroxine can increase warfarin\'s effect.');
Q('thy', 'Cinacalcet lowers blood calcium. What should the nurse check before each dose?',
  ['The current calcium level, compared with the lab\'s reference range', 'Blood glucose', 'TSH', 'Hemoglobin'],
  'Earlier good results do not rule out low calcium now. Give with food; nausea is common.');
Q('thy', 'Which findings are signs of hypocalcemia?',
  ['Perioral tingling, Chvostek and Trousseau signs, muscle spasms', 'Polyuria and thirst', 'Bradycardia and constipation', 'Kidney stones and bone pain'],
  'Severe cases: seizures, prolonged QT and dysrhythmias.');
Q('thy', 'On cinacalcet, calcium dropped from 8.8 to 7.4 mg/dL (range 8.6–10.2). The client feels fine. Best action?',
  ['Hold and promptly clarify the next dose with the provider', 'Give the dose; no symptoms means it is safe', 'Double the dose', 'Give the dose and recheck in a month'],
  '"No symptoms" does not make a low lab value safe.');
Q('thy', 'A client takes levothyroxine with breakfast and a calcium supplement and says "I\'m still tired." First nursing step?',
  ['Check timing, adherence and the TSH trend before assuming the dose is too low', 'Ask the provider to raise the dose', 'Tell the client to stop the drug', 'Switch to methimazole'],
  'Calcium at breakfast blocks absorption. Reteach the empty-stomach schedule.');
Q('thy', 'For thyroid drugs, what should the nurse ask first when interpreting a symptom?',
  ['"Is this drug replacing or suppressing thyroid hormone?"', '"What is the client\'s blood type?"', '"Is the client on a diet?"', '"How old is the prescription?"'],
  'The same symptom can mean too much drug or too little, depending on the drug\'s job.');

/* ---------------- MODULE 7 · INSULIN & DIABETES MEDS ---------------- */
Q('dm', 'When should rapid-acting insulin (lispro, aspart) be given?',
  ['When the meal tray is ready (onset about 15 minutes)', 'At bedtime', '2 hours after eating', 'Only by IV'],
  'Rapid → short → NPH → long. Food must be ready because it works fast.');
Q('dm', 'Which is the ONLY insulin that can be given IV?',
  ['Regular insulin', 'Glargine', 'NPH', 'Lispro mix 75/25'],
  'Regular is clear and short-acting (onset 30–60 min, peak 2–4 h).');
Q('dm', 'Which statement about NPH insulin is correct?',
  ['It is cloudy; roll it, do not shake; peak at 4–12 h brings hypoglycemia risk', 'It is clear and has no peak', 'It can be given IV', 'It must never be mixed with Regular'],
  'Know when the peak is, because that is when lows happen.');
Q('dm', 'Which statement about glargine (long-acting basal insulin) is correct?',
  ['No peak, lasts about 24 hours; never mix with other insulins', 'Peaks at 2 hours', 'Given with each meal', 'Cloudy and must be rolled'],
  'Give it at the same time daily.');
Q('dm', 'When mixing Regular and NPH insulin in one syringe, which order is correct?',
  ['Clear before cloudy (Regular first, then NPH)', 'Cloudy before clear', 'Either order is fine', 'They can never be mixed'],
  'Drawing Regular first keeps NPH from contaminating the Regular vial.');
Q('dm', 'A client on bedtime glargine is NPO for a procedure with no perioperative order. What should the nurse do?',
  ['Clarify the basal dose and glucose monitoring plan with the provider', 'Automatically skip the dose', 'Automatically give the full dose', 'Give a mealtime dose instead'],
  'Basal insulin covers background needs even when not eating. Do not apply the "hold until the meal comes" rule to basal.');
Q('dm', 'A client with Type 1 diabetes is vomiting and not eating. Admission orders list only mealtime insulin. What is the risk?',
  ['DKA from missing basal coverage: clarify now', 'Hypoglycemia from too much basal', 'No risk because the client is not eating', 'Hypertension'],
  'Type 1 clients always need basal insulin.');
Q('dm', 'A client is sweaty, shaky and confused. Glucose is 58 mg/dL and they are alert enough to swallow. What is the Rule of 15?',
  ['Give 15 g fast-acting carbs, recheck glucose in 15 minutes', 'Give 15 units of insulin', 'Wait 15 minutes, then check glucose', 'Give 15 mL of water'],
  'Hypoglycemia is under 70 mg/dL. Follow your protocol.');
Q('dm', 'A client takes metoprolol and insulin. Why does this matter?',
  ['Beta blockers can mask shakiness and fast heart rate of hypoglycemia; sweating usually still shows', 'Beta blockers cause hyperglycemia only', 'They cancel out the insulin', 'There is no interaction'],
  'Teach the client to watch for sweating and check glucose more often.');
Q('dm', 'Which is a key nursing point for metformin?',
  ['Check kidney function and hold for iodinated contrast per policy', 'It causes frequent hypoglycemia by itself', 'Give it IV push', 'It must be taken on an empty stomach at night'],
  'GI upset is common; lactic acidosis is rare but serious.');
Q('dm', 'A client on glyburide ate very little lunch and is now sweaty and confused. What should the nurse do?',
  ['Check glucose now and follow the hypoglycemia protocol', 'Give the next dose of glyburide', 'Document and recheck at dinner', 'Give insulin'],
  'Sulfonylureas squeeze more insulin from the pancreas, even when there is no food.');
Q('dm', 'GLP-1 agonists (liraglutide, semaglutide) are contraindicated with a personal or family history of:',
  ['Medullary thyroid carcinoma (MTC) or MEN2', 'Hypertension', 'Asthma', 'Hypothyroidism'],
  '"Thyroid cancer" alone is not enough: clarify the type before the first dose.');
Q('dm', 'Which adverse effects are linked to SGLT2 inhibitors (empagliflozin)?',
  ['UTIs, genital yeast infections, dehydration and ketoacidosis', 'Weight gain and hypoglycemia', 'Hair loss and rash', 'Hyperkalemia and bradycardia'],
  'They make the kidneys dump glucose in the urine. Ketoacidosis can happen even with near-normal glucose.');
Q('dm', 'A client on acarbose has mild gas and now yellow eyes. What should the nurse do?',
  ['Gas is expected, but jaundice is new: assess and notify the provider promptly', 'Both are expected; take it with more food', 'Stop acarbose and tell the client it caused liver damage', 'Ignore the yellow eyes'],
  'Take acarbose with the first bite of a meal. Do not declare the cause yourself.');
Q('dm', 'A client on sitagliptin (DPP-4 inhibitor) reports severe abdominal pain. The nurse should:',
  ['Report it; it may be pancreatitis', 'Tell the client it is expected', 'Give an antacid', 'Double the dose'],
  'DPP-4 inhibitors are usually well tolerated, so severe abdominal pain stands out.');
Q('dm', 'Insulin is a high-alert drug. What safety step applies?',
  ['Independent double-check per policy: product, concentration, dose and current glucose', 'No checks needed for subcut doses', 'Only check the dose', 'Ask the client to draw it up'],
  'Errors with insulin can cause severe harm quickly.');
Q('dm', 'A client with diabetes starts prednisone. What should the nurse expect?',
  ['Blood glucose rises; the diabetes regimen may need adjusting', 'Blood glucose falls', 'No change in glucose', 'Insulin needs drop to zero'],
  'Steroids raise glucose. Monitor trends and report.');

/* ---------------- MODULE 7 · REPRODUCTIVE MEDS ---------------- */
Q('repro', 'In the ACHES warning signs for estrogen, what does the "C" stand for?',
  ['Chest pain or shortness of breath', 'Cramping', 'Constipation', 'Cough'],
  'Abdominal pain, Chest pain, Headache (severe), Eye changes, Severe leg pain or swelling. All can signal a clot.');
Q('repro', 'Which client is a contraindication for combined estrogen contraceptives?',
  ['A 38-year-old who smokes', 'A 22-year-old nonsmoker', 'A 30-year-old who exercises daily', 'A 25-year-old with seasonal allergies'],
  'Smoking + age 35 or older raises the risk of clots, stroke and MI.');
Q('repro', 'Which drugs can make birth control pills less effective?',
  ['Rifampin, carbamazepine, phenytoin and St. John\'s wort', 'Acetaminophen and ibuprofen', 'Vitamin C and zinc', 'Metformin and insulin'],
  'Teach the client to use backup contraception.');
Q('repro', 'Clomiphene is used to:',
  ['Trigger ovulation', 'Stop ovulation', 'Treat menopause hot flashes', 'Shrink the prostate'],
  'Watch for vision changes, pelvic bloating and ovarian hyperstimulation.');
Q('repro', 'Which teaching is correct for testosterone gel?',
  ['Wash hands and cover the site so women and children are not exposed', 'Apply to the face for best absorption', 'Share leftover gel with family', 'No need to cover the site'],
  'Also monitor hematocrit, fluid retention, prostate symptoms, acne and mood.');
Q('repro', 'Which safety teaching applies to finasteride?',
  ['Pregnant people should not handle crushed or broken tablets', 'It works within 24 hours', 'Take it with nitroglycerin', 'It raises blood pressure'],
  'It shrinks the prostate slowly, over months. Sexual side effects can occur.');
Q('repro', 'What is the key safety teaching for tamsulosin?',
  ['Rise slowly to prevent orthostatic hypotension; do not crush', 'Take on an empty stomach at random times', 'It causes high blood pressure', 'Stop if urine flow improves'],
  'Take it after the same meal daily. It relaxes prostate and bladder-neck muscle.');
Q('repro', 'Which combination can cause severe, possibly fatal hypotension?',
  ['PDE5 inhibitor (sildenafil) + nitrates (nitroglycerin)', 'Tamsulosin + metformin', 'Estrogen + vitamin D', 'Finasteride + acetaminophen'],
  'Both dilate blood vessels. Together, BP can crash.');
Q('repro', 'A client who took sildenafil reports an erection lasting over 4 hours. What should they do?',
  ['Get emergency care', 'Wait it out at home', 'Take another dose', 'Apply heat'],
  'Sudden vision or hearing loss also needs emergency care.');
Q('repro', 'A client on estrogen has one swollen, painful calf after a long flight. Best nursing action?',
  ['Compare both legs, assess breathing and vitals, and report promptly', 'Massage the calf', 'Stop the estrogen yourself', 'Reassure them it is from sitting'],
  'Possible DVT. Chest pain or dyspnea makes it more urgent. Do not diagnose or stop therapy yourself.');
Q('repro', 'After tadalafil, a client has chest pain and BP 84/50. What should the nurse NOT do?',
  ['Suggest their usual nitroglycerin', 'Assess ABCs and get help', 'Report the product and time taken', 'Ask about any nitrate use'],
  'Nitroglycerin + a PDE5 inhibitor can cause life-threatening hypotension.');
Q('repro', 'How do combined oral contraceptives prevent pregnancy?',
  ['Stop ovulation, thicken cervical mucus and thin the uterine lining', 'Kill sperm directly', 'Increase ovulation', 'Block the fallopian tubes'],
  'Take at the same time daily and follow that product\'s missed-dose rules.');

/* ---------------- MODULE 7 · URINARY & BLADDER MEDS ---------------- */
Q('uri', 'Which adverse effects match oxybutynin?',
  ['"Can\'t see, can\'t pee, can\'t spit, can\'t poop": blurred vision, retention, dry mouth, constipation', 'Salivation, diarrhea and frequent urination', 'Hypertension and tachycardia only', 'Red-orange urine'],
  'Oxybutynin is an antimuscarinic. It can also cause confusion in older adults.');
Q('uri', 'Oxybutynin should be avoided in clients with:',
  ['Narrow-angle glaucoma or urinary retention', 'Overactive bladder', 'Hypertension', 'Diabetes'],
  'It dries everything up and relaxes the bladder, which can make these conditions worse.');
Q('uri', 'Bethanechol is used for urinary retention. What does it do?',
  ['Stimulates the bladder to contract (only when there is no blockage)', 'Relaxes the bladder', 'Kills bacteria', 'Numbs urinary burning'],
  'Think of it as the "wake up" bladder drug. Give on an empty stomach.');
Q('uri', 'What is the antidote for bethanechol toxicity (SLUDGE, bradycardia, wheezing)?',
  ['Atropine', 'Naloxone', 'Vitamin K', 'Protamine'],
  'SLUDGE = Salivation, Lacrimation, Urination, Diarrhea, GI cramps, Emesis.');
Q('uri', 'Bethanechol should be avoided in which client?',
  ['A client with asthma or a slow heart rate', 'A client with urinary retention and no blockage', 'A client with dry mouth', 'A client with constipation'],
  'It can cause wheezing and bradycardia. Also avoid with obstruction.');
Q('uri', 'On oxybutynin: "fewer accidents," but small voids and suprapubic pressure. What is the concern?',
  ['Possible urinary retention: check last void, bladder fullness, I&O and a bladder scan', 'The drug is working perfectly', 'A UTI only', 'Dehydration only'],
  'Fewer accidents can hide a bladder that is not emptying.');
Q('uri', 'Which teaching fits nitrofurantoin?',
  ['Take with food; urine may turn brown', 'Take on an empty stomach; urine turns blue', 'Avoid all fluids', 'Stop when symptoms go away'],
  'Finish the entire antibiotic course.');
Q('uri', 'Before giving TMP-SMX, which question is most important?',
  ['"Do you have a sulfa allergy?"', '"Do you like spicy food?"', '"Are you left-handed?"', '"Do you drink coffee?"'],
  'Also teach fluids, watch for rash and sun sensitivity, and note it raises warfarin\'s effect.');
Q('uri', 'Which statement about phenazopyridine is correct?',
  ['It numbs urinary burning but does NOT kill bacteria; turns urine red-orange', 'It cures UTIs on its own', 'It is safe for long-term daily use', 'It turns urine green'],
  'Short-term only, with an antibiotic. It can stain contact lenses and clothes.');
Q('uri', 'On phenazopyridine, burning is better, but the client now has fever, chills and flank pain. What is the concern?',
  ['The infection may be moving up to the kidney: assess and report promptly', 'The drug is working', 'Expected side effects', 'Dehydration only'],
  'Do not reassure. Relief of burning does not mean the infection is gone.');
Q('uri', 'Which client should the nurse see FIRST?',
  ['Bethanechol: new wheezing, pulse 50', 'Estrogen: one swollen, painful calf', 'Liraglutide: "my parent had thyroid cancer"', 'Oxybutynin: dry mouth'],
  'Active breathing and heart changes come first (ABCs). Every other client still needs follow-up.');
Q('uri', 'What should the nurse monitor for mirabegron (an overactive bladder drug)?',
  ['Blood pressure', 'Blood glucose', 'INR', 'TSH'],
  'Mirabegron can raise BP.');
Q('uri', 'How should the nurse track urinary output in a client with a UTI?',
  ['Measure I&O; do not just count bathroom trips', 'Count bathroom trips only', 'Ask the client once a day', 'Weigh the client weekly'],
  'Push fluids unless restricted and report fever, chills or flank pain.');
