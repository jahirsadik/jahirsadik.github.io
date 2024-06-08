---
title: "Towards Heterogeneous Agent Cooperation in Decentralized Multi-Agent Reinforcement Learning"
collection: publications
permalink: /publication/cohet-ijcai
excerpt: 'The paper discusses the challenges and solutions in Cooperative Multi-Agent Reinforcement Learning (MARL), particularly under conditions of reward sparsity and agent heterogeneity. It introduces the CoHet algorithm, which is designed for decentralized training settings with partial observability, aiming to address these challenges. The effectiveness of CoHet is empirically validated in various environments, demonstrating its superiority over existing methods in sparse cooperative tasks that necessitate agent diversity.'
date: 2024-05-29
# venue: 'Machine Learning Journal (MLJ), Springer'
status: 'Under Review in Machine Learning Journal (MLJ), Springer' 
# paperurl: 'http://academicpages.github.io/files/paper3.pdf'
# citation: 'Your Name, You. (2024). &quot;Paper Title Number 3.&quot; <i>GitHub Journal of Bugs</i>. 1(3).'
---
Abstract
======
Multi-agent Reinforcement Learning (MARL) is gaining significance as a key framework for various sequential decision-making and control tasks. Unlike their single-agent counterparts, multi-agent systems necessitate successful cooperation among the agents. The deployment of these systems in real-world scenarios often requires decentralized training, heterogeneous agents, and learning from sparse environmental rewards. These challenges are more acute under partial observability and the lack of prior knowledge about agent heterogeneity. While notable studies use intrinsic motivation (IM) to address reward sparsity in decentralized settings, those dealing with heterogeneity typically assume centralized training, parameter sharing, and agent indexing. To address these issues, we propose the CoHet algorithm, which utilizes a novel Graph Neural Network (GNN) based intrinsic motivation to facilitate the learning of heterogeneous agent policies in decentralized settings under conditions of partial observability and reward sparsity. Evaluation of CoHet in the Multi-agent Particle Environment (MPE) and Vectorized Multi-Agent Simulator (VMAS) benchmarks demonstrates that it outperforms the state-of-the-art in a wide range of cooperative multi-agent scenarios. Our research is supplemented by an analysis of the impact of our agent dynamics model on the intrinsic motivation module, how the different variants of CoHet perform, and its robustness to an increasing number of heterogeneous agents.