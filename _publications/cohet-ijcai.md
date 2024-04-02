---
title: "CoHet: An Intrinsic Reward Based Reinforcement Learning Model to Address
Reward Sparsity and Agent Heterogeneity in Decentralized Cooperative
Multi-Agent Systems"
collection: publications
permalink: /publication/cohet-ijcai
excerpt: 'The paper discusses the challenges and solutions in Cooperative Multi-Agent Reinforcement Learning (MARL), particularly under conditions of reward sparsity and agent heterogeneity. It introduces the CoHet algorithm, which is designed for decentralized training settings with partial observability, aiming to address these challenges. The effectiveness of CoHet is empirically validated in various environments, demonstrating its superiority over existing methods in sparse cooperative tasks that necessitate agent diversity.'
date: 2024-01-07
# venue: 'IJCAI'
status: 'Under Review on IJCAI-2024' 
# paperurl: 'http://academicpages.github.io/files/paper3.pdf'
# citation: 'Your Name, You. (2024). &quot;Paper Title Number 3.&quot; <i>GitHub Journal of Bugs</i>. 1(3).'
---
Abstract
======
Cooperative Multi-Agent Reinforcement Learning (MARL) is gaining significance as a key framework for various sequential decision-making and control tasks. Through neural computation, it extends its capabilities beyond tabular settings to complex state spaces, allowing it to model many real-life scenarios. However, the successful deployment of these systems is often hindered by challenges such as reward sparsity and agent heterogeneity. There are a couple of notable studies that handle both of these challenges, but they assume centralized training, parameter sharing, and full observability. 
Many practical applications deviate from these idealistic assumptions, as they demand the agents to function in a decentralized manner, operating with a partial view of the environment. In this paper, we introduce the CoHet algorithm, designed to tackle both reward sparsity and agent heterogeneity. CoHet enables fully decentralized training under partial observability. We empirically evaluate the algorithm in the Multi-agent Particle Environment (MPE) and Vectorized Multi-Agent Simulator, and demonstrate that it outperforms the state-of-the-art in a range of sparse cooperative tasks that require agent heterogeneity. 
Our research is supplemented by an examination of the agent dynamics model and its impact on the intrinsic reward calculation module, along with an analysis of how the intrinsic reward module helps in dealing with reward sparsity.
