---
title: "Learning Heterogeneous Agent Collaboration in Decentralized Multi-Agent Systems via Intrinsic Motivation"
collection: publications
permalink: /publication/cohet
excerpt: 'The paper discusses the challenges and solutions in Cooperative Multi-Agent Reinforcement Learning (MARL), particularly under conditions of reward sparsity and agent heterogeneity. It introduces the CoHet algorithm, which is designed for decentralized training settings with partial observability, aiming to address these challenges. The effectiveness of CoHet is empirically validated in various environments, demonstrating its superiority over existing methods in sparse cooperative tasks that necessitate agent diversity.'
date: 2024-08-15
# venue: 'Machine Learning Journal (MLJ), Springer'
status: 'Under Review at The 24th International Conference on Autonomous Agents and Multiagent Systems (AAMAS-25)' 
paperurl: 'https://arxiv.org/abs/2408.06503'
# citation: 'Your Name, You. (2024). &quot;Paper Title Number 3.&quot; <i>GitHub Journal of Bugs</i>. 1(3).'
---
Abstract
======
Multi-agent Reinforcement Learning (MARL) is emerging as a key framework for various sequential decision-making and control tasks. Unlike their single-agent counterparts, multi-agent systems necessitate successful cooperation among the agents. The real-world deployment of these systems requires decentralized training and execution (DTE), diverse agents, and learning from infrequent environmental rewards. These challenges become more pronounced under partial observability and the lack of prior knowledge about agent heterogeneity. While notable studies use intrinsic motivation (IM) to address reward sparsity or cooperation in decentralized execution settings, those dealing with heterogeneity typically assume centralized training for decentralized execution (CTDE). To overcome these limitations, we propose the CoHet algorithm, which utilizes a novel Graph Neural Network (GNN) based intrinsic motivation to facilitate the learning of heterogeneous agent policies in fully decentralized settings, under the challenges of partial observability and reward sparsity. Evaluation of CoHet in the Multi-agent Particle Environment (MPE) and Vectorized Multi-Agent Simulator (VMAS) benchmarks demonstrates superior performance compared to the state-of-the-art in a range of cooperative multi-agent scenarios. Our research is supplemented by an analysis of the impact of the agent dynamics model on the intrinsic motivation module, insights into the performance of different CoHet variants, and its robustness to an increasing number of heterogeneous agents.

Paper URL: [https://arxiv.org/abs/2408.06503](https://arxiv.org/abs/2408.06503) || Codebase: [https://github.com/jahirsadik/CoHet-Implementation](https://github.com/jahirsadik/CoHet-Implementation)