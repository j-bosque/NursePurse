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

/* =====================================================================
   EXPANSION SET (round 2): more questions per topic
   ===================================================================== */

/* ---------------- ABG INTERPRETATION (more) ---------------- */
Q('abg', 'pH 7.30, PaCO₂ 50, HCO₃⁻ 30. Interpret.',
  ['Partially compensated respiratory acidosis', 'Uncompensated respiratory acidosis', 'Partially compensated metabolic alkalosis', 'Fully compensated respiratory acidosis'],
  'Low pH + high PaCO₂ = respiratory acidosis. HCO₃⁻ is high (kidneys holding base to help), but pH is still low: partial.');
Q('abg', 'pH 7.44, PaCO₂ 30, HCO₃⁻ 20. Interpret.',
  ['Fully compensated respiratory alkalosis', 'Fully compensated metabolic acidosis', 'Uncompensated respiratory alkalosis', 'Normal ABG'],
  'pH is normal but on the alkaline side (above 7.40). Low PaCO₂ explains alkalosis = respiratory. Low HCO₃⁻ is the kidneys compensating.');
Q('abg', 'pH 7.36, PaCO₂ 56, HCO₃⁻ 31. Interpret.',
  ['Fully compensated respiratory acidosis', 'Fully compensated metabolic alkalosis', 'Partially compensated respiratory acidosis', 'Uncompensated metabolic alkalosis'],
  'pH is normal but on the acidic side. High PaCO₂ explains acidosis = respiratory. High HCO₃⁻ is the kidneys compensating (common in chronic COPD).');
Q('abg', 'pH 7.50, PaCO₂ 40, HCO₃⁻ 32. Interpret.',
  ['Uncompensated metabolic alkalosis', 'Partially compensated metabolic alkalosis', 'Uncompensated respiratory alkalosis', 'Fully compensated metabolic alkalosis'],
  'High pH + high HCO₃⁻ = metabolic alkalosis. PaCO₂ is normal, so the lungs have not compensated yet.');
Q('abg', 'pH 7.43, PaCO₂ 49, HCO₃⁻ 33. Interpret.',
  ['Fully compensated metabolic alkalosis', 'Fully compensated respiratory acidosis', 'Partially compensated metabolic alkalosis', 'Normal ABG'],
  'pH is normal but on the alkaline side. High HCO₃⁻ explains alkalosis = metabolic. High PaCO₂ = the lungs slowing breathing to compensate.');
Q('abg', 'pH 7.40, PaCO₂ 40, HCO₃⁻ 24. Interpret.',
  ['Normal ABG', 'Fully compensated metabolic acidosis', 'Fully compensated respiratory alkalosis', 'Uncompensated respiratory acidosis'],
  'All three values are inside their normal ranges.');
Q('abg', 'pH 7.48, PaCO₂ 30, HCO₃⁻ 23. Interpret.',
  ['Uncompensated respiratory alkalosis', 'Partially compensated respiratory alkalosis', 'Uncompensated metabolic alkalosis', 'Fully compensated respiratory alkalosis'],
  'High pH + low PaCO₂ = respiratory alkalosis. HCO₃⁻ is normal, so no compensation yet.');
Q('abg', 'pH 7.33, PaCO₂ 30, HCO₃⁻ 15. Interpret.',
  ['Partially compensated metabolic acidosis', 'Uncompensated metabolic acidosis', 'Partially compensated respiratory alkalosis', 'Fully compensated metabolic acidosis'],
  'Low pH + low HCO₃⁻ = metabolic acidosis. Low PaCO₂ = lungs compensating. pH is still below 7.35, so partial.');
Q('abg', 'pH 7.22, PaCO₂ 60, HCO₃⁻ 24. Interpret.',
  ['Uncompensated respiratory acidosis', 'Partially compensated respiratory acidosis', 'Uncompensated metabolic acidosis', 'Partially compensated metabolic acidosis'],
  'Low pH + high PaCO₂ = respiratory acidosis. HCO₃⁻ is normal: the kidneys have not caught up yet (they take hours to days).');
Q('abg', 'In a PRIMARY respiratory problem, how does PaCO₂ move compared with pH?',
  ['In the opposite direction', 'In the same direction', 'It does not change', 'It always stays normal'],
  'ROME: Respiratory = Opposite. pH down, PaCO₂ up (respiratory acidosis); pH up, PaCO₂ down (respiratory alkalosis).');
Q('abg', 'After you find which value explains the pH, what is the next step in reading an ABG?',
  ['Check whether the other value is responding (compensation)', 'Calculate the anion gap', 'Look at the PaO₂ first', 'Repeat the ABG'],
  'Step 3: compare measured vs. expected. Abnormal does not automatically mean compensation.');
Q('abg', 'The pH is normal and both PaCO₂ and HCO₃⁻ are abnormal. How do you tell which problem came first?',
  ['Look at which side of 7.40 the pH sits on', 'The one with the bigger number', 'It is always metabolic', 'You cannot tell'],
  'Below 7.40 points to the acidosis value; above 7.40 points to the alkalosis value. The body rarely overcorrects.');
Q('abg', 'In step 4 of ABG reading ("back to the client"), which statement is true?',
  ['A near-normal pH does not prove the client has recovered', 'A normal pH means you can stop assessing', 'Only the numbers matter, not the symptoms', 'Compensation always means the cause is gone'],
  'Look at the cause, breathing, circulation and alertness together.');

/* ---------------- ACID–BASE IMBALANCES (more) ---------------- */
Q('ab', 'Which condition can cause respiratory ACIDOSIS?',
  ['Pneumothorax or chest injury limiting chest expansion', 'Anxiety-related hyperventilation', 'Travel to high altitude', 'Excessive mechanical ventilation'],
  'Anything that limits breathing traps CO₂: chest injury, sleep apnea, obesity, opioids, stroke, PE, ARDS.');
Q('ab', 'Which condition can cause respiratory ALKALOSIS?',
  ['Travel to high altitude', 'Opioid overdose', 'Obstructive sleep apnea', 'End-stage COPD'],
  'At altitude the body breathes faster to get oxygen and blows off CO₂. Also: anxiety, salicylate toxicity, sepsis, early asthma.');
Q('ab', 'Which skin finding is listed for metabolic acidosis?',
  ['Warm, dry, pink skin', 'Cold, clammy, cyanotic skin', 'Yellow (jaundiced) skin', 'Mottled, sweaty skin'],
  'Other cues: Kussmaul breathing, hypotension, weak pulses, bradycardia, dysrhythmias, headache, drowsiness.');
Q('ab', 'Which set of findings fits respiratory acidosis?',
  ['Tachycardia, increased BP, anxiety or confusion, pale or cyanotic skin', 'Numbness, tingling and tinnitus', 'Warm pink skin and Kussmaul breathing', 'Tetany and hyperreflexia'],
  'Severe cases can progress to bradycardia, dysrhythmias and coma.');
Q('ab', 'Which intervention fits respiratory alkalosis from anxiety?',
  ['Calming techniques and anxiolytics as ordered', 'Sodium bicarbonate IV', 'Insulin drip', 'Hold all oxygen'],
  'Also do a toxic screen if salicylate (aspirin) poisoning is possible. Treat the underlying cause.');
Q('ab', 'A client with NG suction has metabolic alkalosis. Which ordered medicine reduces hydrogen chloride loss?',
  ['An IV proton pump inhibitor', 'An antacid', 'Sodium bicarbonate', 'A loop diuretic'],
  'Less acid made = less acid sucked out. Also replace electrolytes, monitor the heart and treat nausea.');
Q('ab', 'Which medication is listed as a treatment for metabolic alkalosis?',
  ['Acetazolamide (carbonic anhydrase inhibitor)', 'Sodium bicarbonate', 'Calcium carbonate', 'Magnesium hydroxide'],
  'Acetazolamide helps the kidneys get rid of bicarbonate. Also hold antacids and use fall precautions.');
Q('ab', 'Which cause produces a NORMAL anion gap metabolic acidosis?',
  ['Diarrhea', 'DKA', 'Salicylate poisoning', 'Lactic acidosis'],
  'Normal gap = bicarbonate is lost (diarrhea, fistulas, chloride-heavy fluids). High gap = acid is added.');
Q('ab', 'If the anion gap is calculated WITH potassium (Na⁺ + K⁺ − (Cl⁻ + HCO₃⁻)), what is normal?',
  ['12 – 16', '8 – 12', '22 – 26', '35 – 45'],
  'Without K⁺ the normal range is 8–12, which is the preferred equation.');
Q('ab', 'In chronic metabolic acidosis, why correct calcium before bicarbonate?',
  ['To avoid tetany as pH rises', 'Calcium raises the pH faster', 'Bicarbonate is toxic with normal calcium', 'Calcium lowers potassium'],
  'Raising the pH lowers ionized calcium. If calcium is already low, the client can develop tetany.');
Q('ab', 'In metabolic acidosis (before full compensation), potassium is usually:',
  ['Elevated, because K⁺ shifts out of cells', 'Low, because of vomiting', 'Normal in every case', 'Unrelated to pH'],
  'H⁺ moves into cells and K⁺ moves out, like swapping seats. Watch the ECG.');
Q('ab', 'Which of these causes metabolic ALKALOSIS?',
  ['Loop or thiazide diuretic use with potassium loss', 'Profuse diarrhea', 'Starvation', 'Kidney failure'],
  'Also: vomiting, NG suction, antacids, TPN, transfusions and digitalis toxicity.');
Q('ab', 'Which drugs help treat respiratory acidosis from bronchospasm?',
  ['Bronchodilators and corticosteroids to open airways', 'Opioids for comfort', 'Sodium bicarbonate', 'Diuretics'],
  'Also stop opioids as needed, reposition, teach deep breathing, and give oxygen or ventilator support if in distress.');

/* ---------------- VENTILATION, DKA & K⁺ + CLINICAL JUDGMENT (more) ---------------- */
Q('vent', 'Caputi Step 1, "Getting the information," matches which NCSBN step?',
  ['Recognize cues', 'Analyze cues', 'Take actions', 'Evaluate outcomes'],
  'Step 1 asks "What do I notice?" It matches Assessment in the nursing process.');
Q('vent', 'Caputi Step 2, "Making meaning of the information," asks:',
  ['"What does this mean?"', '"What should I do?"', '"Did it work?"', '"What do I notice?"'],
  'It matches NCSBN Analyze cues and Diagnosis in the nursing process. ABG pattern reading lives here.');
Q('vent', 'Caputi Step 5, "Evaluating outcomes," matches which nursing process step?',
  ['Evaluation', 'Assessment', 'Planning', 'Implementation'],
  'It asks "Did it work?" Always reassess after an action.');
Q('vent', 'According to the Caputi model, before a nurse can take action they must:',
  ['Recognize, analyze and prioritize', 'Call the provider', 'Document the findings', 'Get a second opinion'],
  'You cannot fix what you have not noticed or understood.');
Q('vent', 'How does the deck compare the nursing process and clinical judgment?',
  ['The nursing process is the roadmap; clinical judgment is how you drive', 'They are unrelated', 'Clinical judgment replaces the nursing process', 'The nursing process is only for students'],
  'Same thinking, different vocabularies.');
Q('vent', 'Why can\'t a bronchodilator fix ineffective breathing (RR 4/min, unresponsive)?',
  ['The problem is not narrowed airways; the client is not moving enough air and needs assisted breaths', 'Bronchodilators only work orally', 'Bronchodilators raise CO₂', 'It would work if given twice'],
  'Bronchodilators open tight airways. They cannot make someone breathe.');
Q('vent', 'In DKA, which data does the team use to judge that ketoacidosis has resolved?',
  ['Ketone and pH/HCO₃⁻ criteria, plus circulation and clinical response', 'Glucose below 200 alone', 'The client saying they feel better', 'Potassium above 5.0'],
  'A falling glucose shows a response, but it is not the finish line.');
Q('vent', 'With vomiting or gastric suction, what leaves the body along with acid?',
  ['Fluid and potassium', 'Bicarbonate only', 'Glucose', 'Calcium only'],
  'H⁺ and Cl⁻ leave, so HCO₃⁻ rises. Fluid and K⁺ loss weakens circulation and muscles.');
Q('vent', 'Which statement matches the deck\'s red-flag rule?',
  ['A single normal value never cancels deterioration somewhere else', 'One normal lab means the client is stable', 'Only vital signs matter', 'Wait for two abnormal labs before acting'],
  'Act now and get help, even if one number looks stable.');
Q('vent', 'Which change during insulin therapy for DKA is a red flag?',
  ['Potassium falling', 'Glucose slowly falling', 'Urine output steady', 'Client becoming more alert'],
  'Falling K⁺ during insulin is dangerous for the heart rhythm.');
Q('vent', 'According to the deck, every clinical decision needs:',
  ['A finding, an action and a reassessment', 'A provider order only', 'A lab value only', 'A family member present'],
  '"Monitor the client" alone is never a complete answer.');
Q('vent', 'Which pair is the deck\'s "four distinctions" warning?',
  ['SpO₂ ≠ ventilation', 'pH = PaCO₂', 'Glucose = potassium safety', 'Comfort = source stopped'],
  'The four: compensation ≠ recovery, SpO₂ ≠ ventilation, glucose ≠ potassium safety, comfort ≠ source stopped.');

/* ---------------- MOUTH & ESOPHAGUS (more) ---------------- */
Q('mouth', 'Primary stomatitis is usually caused by:',
  ['A virus or injury (canker sores, cold sores)', 'Bacterial overgrowth', 'Fungal infection only', 'Chemotherapy only'],
  'Secondary stomatitis is overgrowth or infection, like thrush.');
Q('mouth', 'What is recurrent aphthous stomatitis (RAS)?',
  ['Recurrent canker sores', 'Oral cancer', 'Thrush', 'Dry mouth after radiation'],
  'Aphthous ulcers are canker sores that keep coming back.');
Q('mouth', 'Which vitamin deficiencies can cause stomatitis?',
  ['B vitamins and vitamin C', 'Vitamin D and calcium', 'Vitamin K', 'Vitamin A only'],
  'Other causes: chemotherapy, recent infection, poor oral hygiene, allergies, tobacco, alcohol.');
Q('mouth', 'Which foods should a client with stomatitis choose?',
  ['Soft, bland foods high in vitamin C and protein', 'Spicy and acidic foods', 'Crunchy, hard foods', 'Citrus juices and hot sauce'],
  'Avoid spicy and acidic foods that irritate the sores.');
Q('mouth', 'Which lesion is a classic cue for oral cancer?',
  ['A painless, hardened ulcer with raised edges', 'A painful cold sore on the lip', 'White plaque that scrapes off', 'A bleeding gum after flossing'],
  'Later: a painless sore that bleeds easily and does not heal.');
Q('mouth', 'What is trismus?',
  ['Limited jaw motion', 'Painful swallowing', 'Excess saliva', 'Loss of taste'],
  'It can be a later cue of oral or pharyngeal cancer.');
Q('mouth', 'Which teaching helps PREVENT oral cancer?',
  ['Avoid tobacco and alcohol, protect lips from the sun, and avoid HPV exposure', 'Use alcohol mouthwash daily', 'Brush with a hard toothbrush', 'Eat more salted foods'],
  'Oral cancer is curable if found early, but early stages often have no symptoms.');
Q('mouth', 'Which structures are removed in a radical neck dissection?',
  ['Cervical lymph nodes, sternocleidomastoid muscle, internal jugular vein and spinal accessory nerve', 'The tongue and jaw only', 'The thyroid and parathyroid glands', 'The esophagus and stomach'],
  'Because so much is removed, watch airway, bleeding, infection and neck range of motion.');
Q('mouth', 'After neck dissection, why should the client avoid the Valsalva maneuver?',
  ['To protect the graft and the carotid artery', 'To prevent constipation', 'To lower blood glucose', 'To improve speech'],
  'Straining raises pressure in the neck vessels.');
Q('mouth', 'After oral surgery, the nurse hears new wheezing. What could it mean?',
  ['Aspiration', 'Normal healing', 'Dehydration', 'Pain only'],
  'Wheezing may mean aspiration; stridor may mean obstruction. Keep suction at the bedside.');
Q('mouth', 'Which test can help diagnose a hiatal hernia?',
  ['Barium swallow', 'Urinalysis', 'Echocardiogram', 'Lumbar puncture'],
  'Abdominal x-ray and CT are also used. Risks include twisting, strangulation or obstruction.');
Q('mouth', 'Which is a risk factor for esophageal tumors?',
  ['Untreated GERD', 'High-fiber diet', 'Regular exercise', 'Low-salt diet'],
  'Also: alcohol, smoking, obesity, malnutrition and diets high in nitrates or low in fruits and vegetables.');
Q('mouth', 'After treatment for oral cancer, how often should the client see a dentist?',
  ['At least twice a year', 'Only if pain occurs', 'Every 5 years', 'Never again'],
  'Ongoing oral care lowers infection risk and catches new lesions early.');

/* ---------------- ULCERS, GASTRITIS & GI BLEED (more) ---------------- */
Q('stomach', 'Bright red blood in the stool is called:',
  ['Hematochezia', 'Melena', 'Hematemesis', 'Hemoptysis'],
  'Melena (black, tarry) usually means an upper GI source. Hematochezia is often lower, or a brisk upper bleed.');
Q('stomach', 'When documenting hematemesis, what should the nurse describe?',
  ['Color (bright red or altered), amount and timing, plus circulation findings', 'Only the color', 'Only the time', 'Nothing until the provider arrives'],
  'Check pulse, BP and perfusion at the same time.');
Q('stomach', 'Which statement about pain after endoscopy is correct?',
  ['Mild discomfort should stay mild and improve; worsening pain with vital sign changes is urgent', 'Severe pain is always expected', 'Pain never occurs after endoscopy', 'Any pain should be ignored for 24 hours'],
  'Worsening pain could mean perforation.');
Q('stomach', 'A classmate says, "Night pain means a duodenal ulcer, so we know the diagnosis." What is the safer thinking?',
  ['Timing is useful history, but diagnosis needs broader assessment and evaluation', 'Correct, no further testing needed', 'Night pain means a gastric ulcer', 'Night pain rules out an ulcer'],
  'Symptoms guide the history; tests like EGD confirm.');
Q('stomach', 'Which causes EROSIVE acute gastritis?',
  ['Long-term NSAIDs, alcohol, steroids or gastric radiation', 'H. pylori only', 'Vitamin C deficiency', 'Low-fat diet'],
  'H. pylori is the main NON-erosive cause.');
Q('stomach', 'Which test is used to diagnose gastritis and peptic ulcers?',
  ['EGD (esophagogastroduodenoscopy)', 'Colonoscopy', 'Chest x-ray', 'Echocardiogram'],
  'A scope lets the provider see, biopsy and sometimes treat the lining.');
Q('stomach', 'Which is a gastritis prevention tip from the slides?',
  ['Avoid excessive coffee, even decaf', 'Take aspirin daily', 'Drink alcohol with meals', 'Skip meals to rest the stomach'],
  'Also: limit alcohol, avoid large NSAID or steroid doses, stop tobacco, manage stress, use safe food and water.');
Q('stomach', 'Pain that starts right after eating suggests which type of ulcer?',
  ['Gastric ulcer', 'Duodenal ulcer', 'Stress ulcer', 'Esophageal varices'],
  'Gastric ulcers are in the lower stomach and often relate to acid backflow or pyloric sphincter dysfunction.');
Q('stomach', 'When are H2 blockers (famotidine) used for ulcers?',
  ['When the ulcer is not linked to H. pylori, usually for 6–8 weeks', 'Only for H. pylori, for 3 days', 'Only during a GI bleed', 'Never for ulcers'],
  'PPIs are usually given for 4–8 weeks.');
Q('stomach', 'Which teaching tells a PUD client to seek care right away?',
  ['Red or coffee-ground vomit, or bloody or black stools', 'Mild bloating after a large meal', 'Occasional burping', 'Feeling hungry before meals'],
  'Also sharp, sudden, persistent abdominal pain.');
Q('stomach', 'Which is an EARLY symptom of gastric cancer?',
  ['Dyspepsia that is first relieved by antacids', 'Palpable epigastric mass', 'Severe weight loss', 'Enlarged lymph nodes'],
  'Advanced signs: N/V, iron-deficiency anemia, palpable mass, enlarged nodes, progressive weight loss.');
Q('stomach', 'In an older adult with an upper GI bleed, which change may be an early sign?',
  ['Acute confusion', 'Increased appetite', 'Bradycardia with high BP', 'Weight gain'],
  'Also vertigo, dizziness, syncope, weak pulses, low BP and high HR.');
Q('stomach', 'What is the purpose of gastric lavage in an upper GI bleed?',
  ['To detect blood and decompress the stomach', 'To give nutrition', 'To deliver antibiotics', 'To relieve constipation'],
  'EGD is then used to verify, cauterize or clip the bleed.');
Q('stomach', 'Which is a MOTILITY cause of gastric outlet obstruction?',
  ['Gastroparesis from diabetes', 'A peptic ulcer scar', 'A gastric tumor', 'A swallowed object'],
  'Mechanical causes are scarring from PUD or cancer.');
Q('stomach', 'Which is a complication of peptic ulcer disease?',
  ['Pyloric obstruction', 'Hyperthyroidism', 'Kidney stones', 'Cataracts'],
  'Others: hemorrhage, perforation, peritonitis and hypotension.');

/* ---------------- GERD, B12 & DUMPING (more) ---------------- */
Q('gerd', 'What is GERD?',
  ['Backflow of gastric or duodenal contents into the esophagus, injuring its lining', 'An ulcer in the duodenum', 'Inflammation of the colon', 'A stomach tumor'],
  'Like a one-way door (the LES) that does not close all the way.');
Q('gerd', 'Which is a key risk factor for GERD?',
  ['An incompetent lower esophageal sphincter (LES)', 'Low-fat diet', 'Young age', 'Daily walking'],
  'Others: hiatal hernia, motility disorders, COPD, asthma, tobacco, coffee, alcohol, H. pylori.');
Q('gerd', 'What is odynophagia?',
  ['Painful swallowing', 'Difficulty swallowing', 'Heartburn', 'Excess saliva'],
  'Dysphagia = difficulty swallowing. Pyrosis = heartburn. Water brash = hypersalivation.');
Q('gerd', 'Which GERD symptoms tend to happen at night?',
  ['Coughing, hoarseness or wheezing', 'Diarrhea and cramping', 'Fever and chills', 'Blurred vision'],
  'Lying down lets acid move up toward the throat and airway.');
Q('gerd', 'After eating, how long should a client with GERD stay upright?',
  ['1–2 hours', '5 minutes', '6 hours', 'No need to stay upright'],
  'And finish the last meal 2–3 hours before bed.');
Q('gerd', 'Which drinks should a client with GERD avoid?',
  ['Caffeine, alcohol and carbonated drinks', 'Water', 'Low-fat milk in small amounts', 'Herbal tea without mint'],
  'Also limit acidic, spicy and fried foods.');
Q('gerd', 'How should the nurse handle GERD food triggers?',
  ['Have the client record foods and symptoms and review the triggers that repeat for them', 'Give every client the same long list of banned foods', 'Ignore diet completely', 'Tell the client to stop eating after noon'],
  'Triggers are personal; a generic list may not fit.');
Q('gerd', 'Long-term PPIs can interact with which medicines?',
  ['Clopidogrel and diuretics', 'Acetaminophen and vitamin C', 'Insulin and metformin', 'Penicillin and amoxicillin'],
  'Chronic PPI use also raises fracture and C. diff risk.');
Q('gerd', 'What does a client receive before an EGD scope is inserted?',
  ['Light sedation and a numbing throat spray', 'General anesthesia and a chest tube', 'A barium drink', 'A full meal'],
  'Afterward: airway monitoring, aspiration precautions and a gag check before eating.');
Q('gerd', 'Which is an example of an antacid?',
  ['Calcium carbonate', 'Famotidine', 'Omeprazole', 'Metoclopramide'],
  'Others: magnesium hydroxide and aluminum hydroxide. Famotidine is an H2 blocker; omeprazole is a PPI.');
Q('gerd', 'Why does dumping syndrome happen after gastric surgery?',
  ['Food and sugar reach the small intestine too fast', 'The stomach makes too much acid', 'The client eats too little', 'The esophagus narrows'],
  'Follow the individualized surgical and dietitian plan.');
Q('gerd', 'Which symptoms suggest vitamin B12 deficiency?',
  ['Fatigue, tingling and gait changes', 'Fever and rash', 'Weight gain and high BP', 'Increased thirst'],
  'Nerve symptoms come from low B12 over time.');
Q('gerd', 'Which surface agent preserves the mucosal barrier and is given on an empty stomach?',
  ['Sucralfate', 'Pantoprazole', 'Metoclopramide', 'Calcium carbonate'],
  'Give 1 hour before or 2 hours after meals, and 30 minutes apart from antacids.');

/* ---------------- ENTERAL & PARENTERAL NUTRITION (more) ---------------- */
Q('tube', 'Who chooses the tube-feeding formula?',
  ['The registered dietitian, working with the provider and RN', 'The client alone', 'The pharmacy technician', 'Any nurse on the unit'],
  'Specialty formulas exist for diseases such as diabetes and kidney disease.');
Q('tube', 'What is the goal of tube feeding?',
  ['Positive nitrogen balance and weight maintenance or gain without discomfort or diarrhea', 'Rapid weight loss', 'Bowel rest', 'Lowering blood glucose'],
  'Positive nitrogen balance means the body is building, not breaking down, protein.');
Q('tube', 'Why use the gut (enteral) instead of IV nutrition when possible?',
  ['It helps preserve normal intestinal and liver metabolism', 'It has no aspiration risk', 'It never needs flushing', 'It works without a functioning GI tract'],
  'If the gut works, use it.');
Q('tube', 'A tube that goes through the nose into the jejunum is called:',
  ['Nasojejunal (NJ)', 'Nasogastric (NG)', 'Gastrostomy (G-tube)', 'Jejunostomy (J-tube)'],
  'NG = stomach, ND = duodenum, NJ = jejunum. G-tube and J-tube go through the abdominal wall.');
Q('tube', 'When is a jejunostomy chosen?',
  ['When the gastric route is not accessible, or to lower aspiration risk when the stomach does not work', 'For short-term feeding under 1 week', 'Only for medicine', 'When the client can eat normally'],
  'Small-bowel feedings are usually continuous.');
Q('tube', 'What is a low-profile gastrostomy device (MIC-KEY button)?',
  ['A device that sits at skin level for intermittent access and is easy to conceal', 'A nasal tube', 'A central IV line', 'A permanent stomach stapling'],
  'It interferes very little with clothing.');
Q('tube', 'Which signs suggest infection at a feeding tube site?',
  ['Redness, warmth, swelling or drainage', 'Pale, dry skin', 'Cool skin with no drainage', 'Hair growth around the site'],
  'Teach site care and signs of complications.');
Q('tube', 'Which labs are monitored for a client on tube feedings?',
  ['Kidney function, H/H, serum protein, prealbumin, electrolytes and glucose', 'TSH and T4 only', 'Lipase only', 'Troponin only'],
  'Prealbumin reflects recent nutrition status.');
Q('tube', 'Which findings suggest DEHYDRATION in a tube-fed client?',
  ['Dry mucous membranes, thirst and low urine output', 'Sudden weight gain and edema', 'Crackles in the lungs', 'Bounding pulses'],
  'Water flushes help prevent hypertonic dehydration.');
Q('tube', 'Which statement about feeding access is correct?',
  ['Having a feeding tube does not remove aspiration risk', 'A G-tube eliminates aspiration risk', 'Tube location never needs checking', 'Any medicine can be crushed for a tube'],
  'Verify tube location and check the medicine\'s dosage form as separate safety checks.');
Q('tube', 'What does partial parenteral nutrition contain?',
  ['Lipids', 'Only water', 'Formula through an NG tube', 'Only insulin'],
  'TPN contains lipids, proteins, electrolytes, dextrose, insulin and minerals.');
Q('tube', 'How is a bolus tube feeding usually given?',
  ['Total daily volume split into 4–6 feeds, by gravity through a 50 mL syringe', 'One large feed once a day', 'By IV push', 'Continuously by pump only'],
  'Start slowly and increase as tolerated.');
Q('tube', 'Besides nutrition, what else can a gastrostomy be used for?',
  ['Decompression (gastroparesis, GERD, obstruction)', 'Dialysis', 'Blood draws', 'Urine drainage'],
  'It can deliver fluids and medicines too.');
Q('tube', 'Which client is most at risk for aspiration during tube feeding?',
  ['A client lying flat with abdominal distention and vomiting', 'A client sitting at 45 degrees with soft abdomen', 'A client with a G-tube and normal bowel sounds', 'A client between feedings with HOB at 30 degrees'],
  'Hold the feeding for distention and keep the HOB at least 30 degrees.');

/* ---------------- PITUITARY & ADRENAL (more) ---------------- */
Q('pit', 'What does ADH (antidiuretic hormone) do?',
  ['Tells the kidneys to keep water, so urine output drops', 'Tells the kidneys to lose water', 'Raises blood glucose', 'Lowers potassium'],
  'Anti-diuretic = against urination.');
Q('pit', 'What is aquaresis?',
  ['The kidneys removing water only, not sodium', 'Losing sodium and water together', 'Retaining water', 'Excreting glucose'],
  'ADH blockers like tolvaptan cause aquaresis, so sodium concentration rises.');
Q('pit', 'Which assessments are key for a client on desmopressin?',
  ['Urine output, sodium, daily weight and neuro status', 'Blood glucose only', 'Liver tests only', 'Hearing and vision'],
  'Watch for weight gain, nausea, headache, confusion and seizures.');
Q('pit', 'For water-balance drugs, which data should be looked at together?',
  ['Sodium trend, daily weight, I&O, BP and mental status', 'Urine output only', 'Heart rate only', 'Temperature only'],
  'Urine output alone never tells the whole story.');
Q('pit', 'How should daily weights be done?',
  ['Same scale, same time each day', 'Different scales to compare', 'Only when edema appears', 'Once a week'],
  'Consistency makes the trend meaningful.');
Q('pit', 'A child on somatropin develops a limp and knee pain. What should the nurse do?',
  ['Assess and report it', 'Increase the dose', 'Tell the family it is growing pains', 'Stop the drug without telling anyone'],
  'Hip or knee pain or limp is a listed adverse effect.');
Q('pit', 'On somatropin, growth improved but the child has a new headache and rising glucose. Best action?',
  ['Assess and report; do not increase the dose', 'Increase the dose because it is working', 'Ignore it; this is expected', 'Give extra insulin on your own'],
  'Working ≠ safe. Headache may signal raised ICP.');
Q('pit', 'Why can infection be easy to miss in a client on glucocorticoids?',
  ['Steroids suppress inflammation, so signs like fever may be hidden', 'Steroids cure infections', 'Steroids raise WBCs to normal', 'Infections do not happen on steroids'],
  'Check temperature, wounds and subtle changes closely.');
Q('pit', 'On prednisone, joint pain is better, but there is wound drainage and glucose went from 138 to 264. What is the concern?',
  ['Possible infection and hyperglycemia', 'The drug is working; no concern', 'Hypoglycemia', 'Adrenal crisis'],
  'Report both findings.');
Q('pit', 'What is adrenal suppression?',
  ['After long steroid use, the body makes less of its own cortisol', 'Too much cortisol from a tumor', 'Low sodium from desmopressin', 'Low thyroid hormone'],
  'That is why stopping steroids suddenly is dangerous.');
Q('pit', 'A client on fludrocortisone has BP improving but new muscle weakness. What should the nurse suspect?',
  ['Low potassium', 'High potassium', 'High calcium', 'Low glucose'],
  'Fludrocortisone keeps sodium and loses potassium.');
Q('pit', 'Glucocorticoids combined with a potassium-wasting diuretic can cause:',
  ['Deeper hypokalemia', 'Hyperkalemia', 'Hypoglycemia', 'Hypocalcemia only'],
  'Both drugs push potassium out.');
Q('pit', 'Which "job" does levothyroxine, insulin or desmopressin do in the Module 7 big picture?',
  ['Replace a missing hormone', 'Suppress too much hormone', 'Relax smooth muscle', 'Treat infection'],
  'The six jobs: replace, suppress, stimulate, relax, treat infection, relieve symptoms.');
Q('pit', 'What is the "golden rule" of Module 7?',
  ['Working ≠ safe: a drug can do its job and still cause a new problem', 'If it works, it is safe', 'Always increase the dose when symptoms persist', 'Lab values matter more than symptoms'],
  'Look at the benefit and the harm separately every time.');

/* ---------------- THYROID & CALCIUM (more) ---------------- */
Q('thy', 'A client on levothyroxine has a LOW TSH. What does this suggest?',
  ['Too much thyroid hormone (overdosed)', 'Underdosed', 'Hypothyroidism is getting worse', 'The drug is not being absorbed'],
  'The pituitary is "quiet" because there is plenty of hormone.');
Q('thy', 'Which finding shows methimazole is working?',
  ['Pulse slowing (112 → 88) and less heat intolerance', 'Weight loss and palpitations', 'Fever and sore throat', 'Tingling around the mouth'],
  'Methimazole blocks thyroid hormone production.');
Q('thy', 'Which statement about methimazole is correct?',
  ['It suppresses thyroid hormone; it does not replace it', 'It replaces T4', 'It raises calcium', 'It treats hypothyroidism'],
  'Do not treat methimazole as replacement therapy.');
Q('thy', 'A night-shift worker takes levothyroxine. When should they take it?',
  ['30–60 minutes before the first meal of their day', 'At 8 a.m. no matter when they sleep', 'With their largest meal', 'Right before sleep with iron'],
  'Same rule, shifted to their day. Move iron 4 hours away.');
Q('thy', 'Levothyroxine is used to treat:',
  ['Hypothyroidism', 'Hyperthyroidism', 'Hyperparathyroidism', 'Diabetes insipidus'],
  'It replaces T4 to restore normal metabolism.');
Q('thy', 'What is the Chvostek sign?',
  ['A facial twitch when the facial nerve is tapped (low calcium)', 'A carpal spasm with a BP cuff', 'A rash on the cheeks', 'Eye bulging'],
  'Trousseau sign = carpal spasm when a BP cuff is inflated.');
Q('thy', 'Cinacalcet is commonly used for which clients?',
  ['Clients with hyperparathyroidism, often on dialysis', 'Clients with hypothyroidism', 'Clients with diabetes', 'Clients with osteoporosis only'],
  'It lowers PTH and blood calcium.');
Q('thy', 'On cinacalcet, earlier calcium improved, but today the client has hand spasms. Best action?',
  ['Check the current calcium', 'Give the next dose; earlier labs were good', 'Give a laxative', 'Ignore it'],
  'Earlier good results do not rule out low calcium now.');
Q('thy', 'Which ECG change can occur with hypocalcemia?',
  ['Prolonged QT interval', 'Peaked T waves', 'Shortened PR interval', 'Delta waves'],
  'Severe hypocalcemia can also cause seizures and dysrhythmias.');
Q('thy', 'What is a key risk of PTU?',
  ['Liver injury', 'Hyperkalemia', 'Kidney stones', 'Hearing loss'],
  'PTU is still preferred in the 1st trimester.');
Q('thy', 'How long does a client with hypothyroidism usually take levothyroxine?',
  ['Lifelong', '2 weeks', 'Until symptoms improve', 'Only in winter'],
  'Teach the client not to stop it.');
Q('thy', 'A client on levothyroxine reports chest pain and palpitations. What should the nurse consider?',
  ['Signs of too much thyroid hormone; assess and report', 'Expected effect; continue as usual', 'Signs of too little hormone', 'Unrelated to the drug'],
  'Cardiac clients and older adults are most at risk.');
Q('thy', 'Where does TSH come from?',
  ['The pituitary gland', 'The thyroid gland', 'The adrenal glands', 'The pancreas'],
  'Hypothalamus (TRH) → pituitary (TSH) → thyroid (T3/T4).');

/* ---------------- INSULIN & DIABETES MEDS (more) ---------------- */
Q('dm', 'Which is a risk factor for hypoglycemia?',
  ['Poor food intake during an insulin peak', 'An infection', 'Starting prednisone', 'A missed insulin dose'],
  'Others: sulfonylureas, exercise and alcohol. The other choices raise glucose.');
Q('dm', 'Which signs suggest HYPERglycemia?',
  ['Thirst, frequent urination, fatigue and blurred vision', 'Sweating, shaking and hunger', 'Slow pulse and cold skin', 'Hand spasms'],
  'Check the trend, hydration and ketones per protocol.');
Q('dm', 'Which factors can raise blood glucose?',
  ['Illness, infection, stress, steroids and missed doses', 'Exercise and fasting', 'Alcohol and sulfonylureas', 'Beta blockers'],
  'Sick days often need closer glucose checks.');
Q('dm', 'What does basal insulin do?',
  ['Covers background needs between meals and overnight', 'Covers only the carbs in a meal', 'Treats hypoglycemia', 'Works only when eating'],
  'The body still needs it when not eating.');
Q('dm', 'Before giving prandial (mealtime) insulin, the nurse should:',
  ['Check glucose, confirm the meal tray is here, then give the exact ordered product', 'Give it at a set time no matter what', 'Give it after the client finishes eating any time later', 'Skip the glucose check'],
  'Food must be ready because rapid-acting insulin starts fast.');
Q('dm', 'Put insulin in order from fastest to longest acting:',
  ['Rapid → short (Regular) → intermediate (NPH) → long', 'NPH → Regular → rapid → long', 'Long → NPH → Regular → rapid', 'Regular → rapid → long → NPH'],
  'Learn the order and when each peaks.');
Q('dm', 'Which long-acting insulin lasts LONGER than 24 hours?',
  ['Degludec', 'Lispro', 'Regular', 'NPH'],
  'Glargine and detemir last about 24 hours.');
Q('dm', 'How does metformin lower glucose?',
  ['The liver releases less glucose and the body responds better to insulin', 'It squeezes more insulin out of the pancreas', 'It makes the kidneys dump glucose', 'It slows carb digestion in the gut'],
  'Used alone, it has a low hypoglycemia risk.');
Q('dm', 'How do GLP-1 agonists (liraglutide, semaglutide) work?',
  ['Glucose-dependent insulin release and slower stomach emptying', 'They block glucose absorption in the kidneys', 'They replace basal insulin', 'They stop the liver from making glucose'],
  'Nausea is common; watch for pancreatitis.');
Q('dm', 'How do SGLT2 inhibitors (empagliflozin) lower glucose?',
  ['The kidneys dump glucose in the urine', 'They increase insulin release', 'They slow stomach emptying', 'They block carb digestion'],
  'Sugar in urine explains the UTIs and yeast infections.');
Q('dm', 'How does acarbose work?',
  ['Slows carbohydrate digestion', 'Increases insulin release', 'Blocks liver glucose output', 'Replaces insulin'],
  'That is why it is taken with the first bite of a meal and gas is common.');
Q('dm', 'Before starting liraglutide, a client says "my parent had thyroid surgery." What should the nurse do?',
  ['Ask what type of cancer, whether it was medullary (MTC), and about MEN2; get the record', 'Refuse to give it ever', 'Give it; surgery history does not matter', 'Switch to another drug yourself'],
  'Report the concern before the first dose if MTC or MEN2 is confirmed.');
Q('dm', 'Which statement about diabetes drugs is correct?',
  ['A drug class predicts effects, but the exact product determines the warning', 'All drugs in a class have identical warnings', 'Product names do not matter', 'Only insulin has warnings'],
  'Teach clients which symptom to report and what to do.');
Q('dm', 'What is the safe approach to a client with high glucose?',
  ['Check the trend, hydration, ketones per protocol and the prescribed correction plan', 'Give extra insulin you choose', 'Restrict all fluids', 'Wait until the next day'],
  'Never invent a dose.');

/* ---------------- REPRODUCTIVE MEDS (more) ---------------- */
Q('repro', 'What is hormone replacement therapy (HRT) used for?',
  ['Replacing estrogen in menopause', 'Preventing pregnancy only', 'Triggering ovulation', 'Treating BPH'],
  'Cancer and clot risks differ by product; review each one.');
Q('repro', 'Which are common, milder side effects of estrogen?',
  ['Nausea, breast tenderness and spotting', 'Severe one-sided leg swelling', 'Sudden chest pain', 'Loss of vision'],
  'The other choices are ACHES warning signs.');
Q('repro', 'What should a client on hormonal therapy report?',
  ['Abnormal bleeding or breast lumps', 'Mild bloating once', 'Feeling hungry', 'Dry skin'],
  'Long-term use raises some cancer risks.');
Q('repro', 'Which statement about emergency contraception is correct?',
  ['It is time-sensitive; follow the product\'s guidance', 'It works best a week later', 'It must be taken with food only', 'It protects against STIs'],
  'Take a private, respectful history.');
Q('repro', 'Why does testosterone require hematocrit monitoring?',
  ['It boosts red blood cell production', 'It destroys red blood cells', 'It causes bleeding', 'It lowers platelets'],
  'Also watch fluid retention and prostate symptoms.');
Q('repro', 'A man cannot void and has a distended bladder. What does this suggest?',
  ['Acute urinary retention needing prompt follow-up', 'A normal finding with BPH', 'Dehydration', 'A UTI that needs only fluids'],
  'Weak stream or dribbling needs assessment; inability to void is more urgent.');
Q('repro', 'Tamsulosin combined with a PDE5 inhibitor can cause:',
  ['An additive drop in blood pressure', 'High blood pressure', 'Hyperglycemia', 'Kidney stones'],
  'Both relax smooth muscle in blood vessels. Rise slowly.');
Q('repro', 'How do PDE5 inhibitors (sildenafil, tadalafil) work?',
  ['They dilate blood vessels', 'They raise testosterone', 'They shrink the prostate', 'They block estrogen'],
  'Side effects: headache, flushing and low BP.');
Q('repro', 'A client on clomiphene reports blurred vision. What should the nurse do?',
  ['Report it; vision changes are an adverse effect', 'Reassure them it is normal', 'Double the dose', 'Tell them to stop eating'],
  'Also watch for pelvic bloating and ovarian hyperstimulation.');
Q('repro', 'A client missed a birth control pill. What should the nurse teach?',
  ['Follow that product\'s missed-dose rules and use backup when told to', 'Take 5 pills at once', 'Stop the pack and start over in a month', 'Missed pills never matter'],
  'Take pills at the same time daily.');
Q('repro', 'According to the deck, during a reproductive visit the real danger may be:',
  ['Circulatory, such as a blood clot', 'Dental', 'Dermatologic only', 'Hearing loss'],
  'Address circulatory findings first.');
Q('repro', 'When taking a reproductive health history, the nurse should:',
  ['Ask privately about tobacco, vascular history and prior hormone-sensitive cancer, without assuming risk from appearance', 'Guess risk based on how the client looks', 'Ask only about allergies', 'Ask in front of visitors to save time'],
  'Private and respectful history-taking gets accurate answers.');

/* ---------------- URINARY & BLADDER MEDS (more) ---------------- */
Q('uri', 'Which adverse effect of oxybutynin is a special concern in older adults?',
  ['Confusion', 'Hair loss', 'Weight gain', 'High blood sugar'],
  'Antimuscarinic drugs can affect thinking in older adults.');
Q('uri', 'What is the expected effect of oxybutynin?',
  ['Relaxes the bladder: less urgency and fewer accidents', 'Makes the bladder contract', 'Kills bacteria', 'Turns urine orange'],
  'It treats overactive bladder.');
Q('uri', 'Why is bethanechol contraindicated in urinary obstruction?',
  ['It makes the bladder squeeze hard against a blocked outlet', 'It relaxes the bladder too much', 'It causes kidney stones', 'It lowers potassium'],
  'It works only when there is no blockage.');
Q('uri', 'Bethanechol belongs to which drug class?',
  ['Cholinergic', 'Antimuscarinic', 'Alpha blocker', 'PDE5 inhibitor'],
  'Cholinergic effects = SLUDGE. Antidote: atropine.');
Q('uri', 'Which teaching is correct for phenazopyridine?',
  ['It can stain contact lenses and clothes', 'It is safe to take for months', 'It replaces antibiotics', 'Urine will turn blue'],
  'Urine turns red-orange.');
Q('uri', 'Before starting a UTI antibiotic, what should the nurse check?',
  ['Allergies, kidney function, pregnancy and culture timing', 'Only the client\'s weight', 'Only blood glucose', 'Nothing, just give it'],
  'Get the culture before the first dose when ordered.');
Q('uri', 'Which UTI teaching is correct?',
  ['Finish the whole antibiotic course and drink fluids unless restricted', 'Stop antibiotics when burning stops', 'Limit fluids to avoid urinating', 'Save leftover pills for next time'],
  'Report fever, chills or flank pain.');
Q('uri', 'A client on warfarin starts TMP-SMX. What should the nurse monitor?',
  ['INR and bleeding', 'Blood glucose', 'TSH', 'Calcium'],
  'TMP-SMX raises warfarin\'s effect.');
Q('uri', 'Which statement reflects the deck\'s urinary teaching?',
  ['Storage, emptying, infection and pain relief are separate goals; check each one', '"Less burning means the problem is solved"', '"Fewer accidents means the bladder is emptying"', 'Only pain relief matters'],
  'A drug can fix one goal while another problem grows.');
Q('uri', 'What is urinary retention?',
  ['The bladder does not empty; small voids plus fullness or pressure', 'Leaking urine with coughing', 'Burning with urination', 'Red-orange urine'],
  'Check the last void, bladder fullness and a bladder scan per protocol.');
Q('uri', 'A client on nitrofurantoin notices brown urine. The nurse explains:',
  ['This is an expected color change', 'This means kidney failure', 'Stop the drug right away', 'This means dehydration only'],
  'Take nitrofurantoin with food.');
Q('uri', 'Which Module 7 "job" does tamsulosin or oxybutynin do?',
  ['Relax smooth muscle', 'Replace a hormone', 'Treat infection', 'Stimulate an action'],
  'Bethanechol "stimulates." Phenazopyridine "relieves symptoms." Nitrofurantoin "treats infection."');
Q('uri', 'Phenazopyridine fits which Module 7 "job"?',
  ['Relieve symptoms without fixing the cause', 'Treat infection', 'Replace a hormone', 'Suppress a hormone'],
  'It numbs the burning; the antibiotic treats the bug.');
